var address = /^0x[a-fA-F0-9]{40}$/;
var txnhash = /^0x[a-fA-F0-9]{64}$/;
var block = /^\d+$/;

chrome.contextMenus.create({
    id: 'create-menu',
    title: 'Search BscScan for "%s"',
    contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    var text = info.selectionText;
    if (info.menuItemId == 'create-menu') {
        if (address.test(text)) {
            chrome.tabs.create({ url: 'https://bscscan.com/address/' + text });
        }
        else if (txnhash.test(text)) {
            chrome.tabs.create({ url: 'https://bscscan.com/tx/' + text });
        }
        else if (block.test(text)) {
            chrome.tabs.create({ url: 'https://bscscan.com/block/' + text });
        }
        else {
            chrome.tabs.create({ url: 'https://bscscan.com/search?f=0&q=' + text });
        }
    }
});
