import { showUi } from "/src/content-scripts/loader.ts__t--1686414790164.js";
import { getPreferences } from "/src/utils/chrome-dev.ts.js";
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message == "update_url") {
    sendResponse({ message: "update_url_permission" });
  }
});
let isLoading = false;
const observer = new MutationObserver((mutations) => {
  mutations.forEach((_, i) => {
    if (i == mutations.length - 1) {
      if (!isLoading) {
        startRemoving();
      }
    }
  });
});
function observePage() {
  const config = { subtree: true, childList: true };
  observer.observe(document, config);
}
const globalPreferences = getPreferences();
startRemoving();
async function startRemoving() {
  isLoading = true;
  observer.disconnect();
  await removeAds();
  isLoading = false;
  observePage();
}
export async function removeAds() {
  let isListView = true;
  const options = getItemsByClassName("hz-Button--small isActive");
  setTimeout(() => {
    getOptions();
  }, 0);
  setTimeout(() => {
    getOptions();
  }, 300);
  function getOptions() {
    if (options) {
      options.forEach((option) => {
        const label = getSingleItemByClassName("view-option-label", option);
        if (label) {
          const labelText = label.innerHTML.replace(" ", "");
          if (labelText.includes("Lijst")) {
            isListView = true;
          } else if (labelText.includes(`Foto's`)) {
            isListView = false;
          } else if (document.URL.includes("#view:gallery-view")) {
            isListView = false;
          } else if (document.URL.includes("#view:list-view")) {
            isListView = true;
          }
        }
      });
    }
  }
  setTimeout(async () => {
    await removeItemz();
  }, 0);
  async function removeItemz() {
    if (isListView) {
      const listItems = getItemsByClassName("hz-Listing hz-Listing--list-item");
      if (listItems) {
        await removeItemsFromDOM(listItems, true);
      }
    } else {
      const listItems = getItemsByClassName("hz-Listing hz-Listing--gallery-item");
      if (listItems) {
        await removeItemsFromDOM(listItems, false);
      }
    }
  }
}
async function removeItemsFromDOM(items, isListView) {
  const preferences = await globalPreferences;
  if (items) {
    let numberOfVisibleItems = items.length;
    for (let i = 0; i < items.length; i++) {
      const isItemAd = isAd(items[i]);
      if (isItemAd) {
        if (isListView) {
          items[i].style.height = "0";
          items[i].style.padding = "0";
        } else {
          items[i].style.display = "none";
          items[i].remove();
        }
        numberOfVisibleItems--;
      }
    }
    if (numberOfVisibleItems == items.length) {
      showUi();
    } else if (numberOfVisibleItems < 1) {
      await toNextPage(isListView);
    } else {
      showUi();
    }
    removeEmptyContainers();
  }
  function isAd(item) {
    const adContainer = getSingleItemByClassName("hz-Listing-priority", item);
    function shouldRemoveItem() {
      if (!adContainer) {
        return;
      }
      if (isListView) {
        const isDagTopperOrTopadvertentie = !preferences.showDagtopper && adContainer.querySelector("span").innerHTML == "Dagtopper" || !preferences.showSponsored && adContainer.querySelector("span").innerHTML.trim() == "Topadvertentie";
        if (!isDagTopperOrTopadvertentie) {
          const sellerContainer = getSingleItemByClassName("hz-Listing-seller-external-link", item);
          if (!sellerContainer) {
            return false;
          }
        }
      } else if (!isListView) {
        const isDagTopperOrTopadvertentie = !preferences.showDagtopper && adContainer.querySelector("span").innerHTML == "Dagtopper" || !preferences.showSponsored && adContainer.querySelector("span").innerHTML.trim() == "Topadvertentie";
        if (!isDagTopperOrTopadvertentie) {
          const sellerContainer = getSingleItemByClassName("hz-Listing-Opvalsticker-wrapper", item);
          if (!sellerContainer) {
            const sellerLink = getSingleItemByClassName("hz-Listing-seller-link", item);
            if (!sellerLink) {
              return;
            }
            if (sellerLink.querySelector("a")) {
              return true;
            } else {
              return false;
            }
          }
        }
      }
      return true;
    }
    return shouldRemoveItem();
  }
}
function getSingleItemByClassName(className, container) {
  if (container) {
    return container.getElementsByClassName(className)[0] ?? false;
  }
  return document.getElementsByClassName(className)[0] ?? false;
}
function getItemById(id) {
  return document.getElementById(id) ?? false;
}
function getItemsByClassName(className) {
  return Array.from(document.getElementsByClassName(className)) ?? false;
}
function removeEmptyContainers() {
  const weirdBottoms = [
    "hz-Listings__container--cas",
    "hz-Listing hz-Listing--other-seller",
    "hz-Listings__admarktTitle",
    "ad ad-1",
    "ad",
    "hz-Banner hz-Banner--fluid",
    "hz-Listings__container--casGallery"
  ];
  weirdBottoms.forEach((item) => {
    const container = getItemsByClassName(item);
    if (container) {
      container.forEach((containerItem) => {
        containerItem.style.display = "none";
      });
    }
  });
  const ads = ["adsense-container", "ads", "ftContainer", "ad_unit"];
  ads.forEach((item) => {
    const container = getItemById(item);
    if (container) {
      container.style.display = "none";
    }
  });
}
async function toNextPage(isListView) {
  let listView = true;
  const pageInUrlRegex = /p\/([0-9]){1,5}/;
  let tabUrl = document.URL;
  if (tabUrl.includes("#view:gallery-view")) {
    listView = false;
  }
  if (!tabUrl) {
    return;
  }
  tabUrl = tabUrl.replace("#view:gallery-view/", "");
  tabUrl = tabUrl.replace("#view:list-view/", "");
  tabUrl = tabUrl.replace("#view:gallery-view", "");
  tabUrl = tabUrl.replace("#view:list-view", "");
  const match = tabUrl.match(pageInUrlRegex);
  const matchTerm = match?.length > 0 ? match[match.length - 1] : null;
  if (matchTerm) {
    const page = parseInt(matchTerm);
    const newPage = (page + 1).toString();
    const newPageInUrl = matchTerm.replace(/([0-9]){1,5}/, newPage);
    let newUrl = tabUrl.replace(matchTerm, newPageInUrl);
    newUrl = `${newUrl}${!isListView ? "#view:gallery-view" : "#view:list-view"}`;
    await updateUrl(newUrl);
  } else {
    if (tabUrl[tabUrl.length - 1] == "/") {
      tabUrl = tabUrl.slice(0, -1);
    }
    const newUrl = `${tabUrl}/p/2/${!isListView ? "#view:gallery-view" : "#view:list-view"}`;
    await updateUrl(newUrl);
  }
}
async function updateUrl(newUrl) {
  await chrome.runtime.sendMessage({ message: "update_url", newUrl });
}
