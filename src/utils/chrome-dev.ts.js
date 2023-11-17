import { sortList } from "/src/utils/list.ts.js";
import { parseString } from "/src/utils/strings.ts.js";
export const updatePreference = async (preferenceType, value) => {
  const update = {};
  update[preferenceType] = value;
  await chrome.storage.sync.set(update);
};
export const getPreferences = async () => {
  const dagTopperPreference = await chrome.storage.sync.get("showDagtopper");
  const sponsoredPreference = await chrome.storage.sync.get("showSponsored");
  const webshopPreference = await chrome.storage.sync.get("showWebshops");
  let showDagtopper = false;
  let showSponsored = false;
  let showWebshops = false;
  if (!dagTopperPreference.showDagtopper) {
    await chrome.storage.sync.set({ showDagtopper: false });
  } else {
    showDagtopper = dagTopperPreference.showDagtopper;
  }
  if (!sponsoredPreference.showSponsored) {
    await chrome.storage.sync.set({ showSponsored: false });
  } else {
    showSponsored = sponsoredPreference.showSponsored;
  }
  if (!webshopPreference.showWebshops) {
    await chrome.storage.sync.set({ showWebshops: false });
  } else {
    showWebshops = webshopPreference.showWebshops;
  }
  return { showDagtopper, showSponsored, showWebshops };
};
export const getSellerList = async () => {
  let result = [];
  const localList = await chrome.storage.sync.get(["blockedSellers"]);
  if (!!localList && localList.blockedSellers && localList.blockedSellers.length > 0) {
    result = localList.blockedSellers;
    sortList(result);
  } else {
    await chrome.storage.sync.set({ blockedSellers: [] });
  }
  return result;
};
export const addItemToList = async (input, currentList) => {
  if (!input) {
    return;
  }
  const parsedInput = parseString(input);
  if (!currentList.includes(input)) {
    currentList.push(parsedInput);
    if (currentList.length > 0) {
      sortList(currentList);
    }
    await updateSellerList(currentList);
  }
  return currentList;
};
export const removeItemFromStorage = async (value, list) => {
  const index = list.indexOf(value);
  list.splice(index, 1);
  await updateSellerList(list);
  const newList = await getSellerList();
  return newList;
};
export const updateSellerList = async (newList) => {
  await chrome.storage.sync.set({ blockedSellers: newList });
};
export const clearList = () => {
  if (confirm("Weet je het zeker? Dit verwijdert alle verkopers die nu in je lijstje staan.") == true) {
    remove();
  }
  async function remove() {
    await chrome.storage.sync.set({ blockedSellers: [] });
  }
};
