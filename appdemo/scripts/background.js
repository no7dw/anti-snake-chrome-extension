'use strict';

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if(true ){
            console.log("bingo");
            return {redirectUrl: chrome.extension.getURL('html/index.html')};    
        }
        return details.url;
    },
    {
        urls: [
            "*://*.facebook.com/*",
            "*://*.twitter.com/*",
            "*://*.baidu.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

function skipWordList(){
    "python"
};

document.addEventListener('DOMContentLoaded', function() {
    var body = document.body.innerHTML;
    if(body.indexOf(skipWordList())){
        console.log(true);
    }
});
