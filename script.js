var observer;
var injectedLink;
var imageElement;
var spaceNode;
var parentNode;
var selector;
var link;

//create observer to wait the affected service to appear on the page
if (!observer) {
    observer = new MutationObserver(function (mutations, mutationInstance) {
        const serviceElement = document.querySelector(selector);
        if (serviceElement) {
            //injected = true
            injectDiv(serviceElement);
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

function injectDiv(targetElement) {
    if (targetElement) {

        //spaceNode = document.createTextNode("TESTE");

        injectedLink = document.createElement('a');
        injectedLink.textContent = 'Tompero';
        injectedLink.target = '_blank'; // Open in a new tab
        injectedLink.href = `https://tompero.ifoodcorp.com.br/resources/${targetElement.textContent}`;
        //injectedLink.style.border = '1px solid #000'; // Add styles as needed

        imageElement = document.createElement("img");

        // Set the src attribute to the URL of the image
        imageElement.src = "https://i.pinimg.com/originals/43/5e/f7/435ef7cc4b59a7601b208334a24eb2ce.jpg";
        imageElement.width = 30;  // Replace with your desired width
        imageElement.height = 30;
        // Insert the div next to the target element
        //targetElement.parentNode.insertBefore(imageElement, targetElement.nextSibling);
        // Insert the space node before the anchor element
        //targetElement.parentNode.insertBefore(spaceNode, targetElement.nextSibling);
        

        //targetElement.parentNode.insertBefore(injectedLink, targetElement.nextSibling);
        targetElement.parentNode.insertBefore(injectedLink, targetElement.nextSibling);
        targetElement.parentNode.insertBefore(imageElement, targetElement.nextSibling);
        //targetElement.parentNode.insertBefore(spaceNode, targetElement);
        // Get the parent node of the target element
     
    } else {
        console.log("Affected service not found")
    }
}

selector = '#ak-main-content > div > div > div._4t3i1osq._1e0c1txw._2lx21bp4 > div._4t3i1osq._kqswh2mm > div._kqswh2mm._4t3i1osq > div._ogwtidpf._6tinidpf._1cezidpf._m3zkidpf._7yjtidpf._ldgnidpf._un3pidpf._29hzidpf._4t3i1osq._1e0c1txw._2lx21bp4._15y61q9c._k8em1osq._dzc24jg8 > div > div._12ji1r31._1qu2glyw._12y31o36._1reo1e7b._18m92qvy._u5f318bx._1ul91ll1._v5647jka > div > div._3um0ewfl > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div > div > details > div > div > div:nth-child(7) > div > div > div._16jlkb7n._1bsb1nrf._vchhusvi._196m16np > div > div:nth-child(2) > div > form > div > div > div > div > div > span > a';
observeService()