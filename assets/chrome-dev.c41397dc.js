function n(s){s.sort(function(e,o){return e.toLowerCase()<o.toLowerCase()?-1:e.toLowerCase()>o.toLowerCase()?1:0})}function l(s){return s.replace("&","&amp;")}const w=async(s,e)=>{const o={};o[s]=e,await chrome.storage.sync.set(o)},h=async()=>{const s=await chrome.storage.sync.get("showDagtopper"),e=await chrome.storage.sync.get("showSponsored"),o=await chrome.storage.sync.get("showWebshops");let t=!1,r=!1,a=!1;return s.showDagtopper?t=s.showDagtopper:await chrome.storage.sync.set({showDagtopper:!1}),e.showSponsored?r=e.showSponsored:await chrome.storage.sync.set({showSponsored:!1}),o.showWebshops?a=o.showWebshops:await chrome.storage.sync.set({showWebshops:!1}),{showDagtopper:t,showSponsored:r,showWebshops:a}},i=async()=>{let s=[];const e=await chrome.storage.sync.get(["blockedSellers"]);return!!e&&e.blockedSellers&&e.blockedSellers.length>0?(s=e.blockedSellers,n(s)):await chrome.storage.sync.set({blockedSellers:[]}),s},p=async(s,e)=>{if(!s)return;const o=l(s);return e.includes(s)||(e.push(o),e.length>0&&n(e),await c(e)),e},g=async(s,e)=>{const o=e.indexOf(s);return e.splice(o,1),await c(e),await i()},c=async s=>{await chrome.storage.sync.set({blockedSellers:s})},f=()=>{confirm("Weet je het zeker? Dit verwijdert alle verkopers die nu in je lijstje staan.")==!0&&s();async function s(){await chrome.storage.sync.set({blockedSellers:[]})}};export{p as a,i as b,f as c,h as g,g as r,w as u};
