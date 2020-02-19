// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Find the book";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
//  var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);
  var url = "https://catalog.sunnyvalelibrary.org/iii/encore/search/C__S" + encodeURIComponent(sText) + "__Orightresult__U?lang=eng&suite=cobalt";
  window.open(url, '_blank');
};
