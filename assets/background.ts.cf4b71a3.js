chrome.runtime.onMessage.addListener(function(e,r,i){if(!!(e!=null&&e.message))return!!e&&e.message==="update_url"&&chrome.tabs.query({active:!0,currentWindow:!0},function(n){chrome.tabs.sendMessage(n[0].id,{message:"update_url"},function(a){a.message=="update_url_permission"&&s(e.newUrl)})}),!1});async function s(e){await chrome.tabs.update({url:e})}
