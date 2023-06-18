(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/remove-items.ts.e26de631.js")
    );
  })().catch(console.error);

})();
