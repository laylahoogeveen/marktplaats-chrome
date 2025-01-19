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
  let showBlockedUsers = false;
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
  if (!webshopPreference.showBlockedUsers) {
    await chrome.storage.sync.set({ showBlockedUsers: false });
  } else {
    showBlockedUsers = webshopPreference.showBlockedUsers;
  }
  return { showDagtopper, showSponsored, showWebshops, showBlockedUsers };
};
export const getSellerList = async () => {
  return getStorageList("blockedSellers");
};
export const getUserList = async () => {
  return getStorageList("blockedUsers");
};
const getStorageList = async (key) => {
  let result = [];
  const localList = await chrome.storage.sync.get([key]);
  if (!!localList && localList[key] && localList[key].length > 0) {
    result = localList[key];
    sortList(result);
  } else {
    const update = {};
    update[key] = [];
    await chrome.storage.sync.set(update);
  }
  return result;
};
export const addItemToList = async (key, input, currentList) => {
  if (!input) {
    return currentList;
  }
  const parsedInput = parseString(input);
  if (!currentList.includes(parsedInput)) {
    currentList.push(parsedInput);
    if (currentList.length > 0) {
      sortList(currentList);
    }
    await updateStorageList(key, currentList);
  }
  return currentList;
};
export const removeItemFromStorage = async (key, value, list) => {
  const index = list.indexOf(value);
  list.splice(index, 1);
  await updateStorageList(key, list);
  const newList = await getStorageList(key);
  return newList;
};
export const updateSellerList = async (newList) => {
  await updateStorageList("blockedSellers", newList);
};
export const updateUserList = async (newList) => {
  await updateStorageList("blockedUsers", newList);
};
const updateStorageList = async (key, newList) => {
  const update = {};
  update[key] = newList;
  await chrome.storage.sync.set(update);
};
export const clearList = () => {
  if (confirm("Weet je het zeker? Dit verwijdert alle verkopers die nu in je lijstje staan.") == true) {
    remove();
  }
  async function remove() {
    const update = { blockedSellers: [], blockedUsers: [] };
    await chrome.storage.sync.set(update);
  }
};
