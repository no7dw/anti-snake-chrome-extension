chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    // message.innerText = request.source;
    if(request.source.toLowerCase().indexOf('python')>0){
      alert('has python');
    }
    else{
      alert('no python');
    }
  }
});

function onWindowLoad() {

  // var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      alert(chrome.runtime.lastError.message);
      // message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

};
document.addEventListener('DOMContentLoaded', function () {
  function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    return html;
  };
  alert(DOMtoString(document));
  alert(document.all[0].outerHTML);
});

window.onload = onWindowLoad;
