// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.

console.log("Background Running")
//At every update check if URL changed and inject the code to the page
chrome.tabs.onUpdated.addListener(
    async function (tabId, changeInfo, tab) {

        if (changeInfo.url) {

            try {
                    console.log("estou no ticket")
                    await chrome.scripting.executeScript({
                        target: {
                            tabId: tab.id,
                            //allFrames: true,
                        },
                        files: ["script.js"],
                    });
                
            } catch (err) {
                console.error(`failed to execute script: ${err}`);
            }
        }
    }
);


