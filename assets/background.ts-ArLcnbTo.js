chrome.runtime.onMessage.addListener(function(e){if(e)return e.message==="update_url"&&chrome.tabs.query({active:!0,currentWindow:!0},function(r){chrome.tabs.sendMessage(r[0].id,{message:"update_url"},function(a){a.message=="update_url_permission"&&n(e.newUrl)})}),!1});async function n(e){await chrome.tabs.update({url:e})}
