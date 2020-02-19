chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.getElementById("output").innerHTML = '<a href="https://catalog.sunnyvalelibrary.org/iii/encore/search/C__S' + selection[0] + '__Orightresult__U">search me</a>';
});

window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
})


// chrome.browserAction.onClicked.addListener(function(activeTab){
//   var newURL = "http://stackoverflow.com/";
//   chrome.tabs.create({ url: newURL });
// });


