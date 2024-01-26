//#gadget-15839 > div > div > table > tbody > tr:nth-child(1) > td.summary > p > a


var observer;
var injectedLink;
var selector;

//create observer to wait the affected service to appear on the page
if (!observer) {
    observer = new MutationObserver(function (mutations, mutationInstance) {
        const serviceElement = document.querySelector(selector);
        if (serviceElement) {
            console.logs("tem alerta")
            //injectDiv(serviceElement);
            mutationInstance.disconnect();
        }
    });
}


function observeService() {
    observer.observe(document, {
        childList: true,
        subtree: true
    });

}

selector = '#gadget-15839 > div > div > table > tbody > tr:nth-child(1) > td.summary > p > a'
observeService()