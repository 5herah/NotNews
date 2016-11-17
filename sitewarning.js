// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });

chrome.tabs.onUpdated.addListener(
function ( tabId, changeInfo, tab )
{
  var fakeNewsURLs = getFakeNewsURLs();

  if ( changeInfo.status === "loading" )
    {
        //lowercase
        theURL = tab.url;
        var scrubbedURL = (theURL).toLowerCase();

        //no http's or www's
        scrubbedURL = scrubbedURL.replace("https://www.", "");
        scrubbedURL = scrubbedURL.replace("http://www.", "");
        scrubbedURL = scrubbedURL.replace("https://", "");
        scrubbedURL = scrubbedURL.replace("http://", "");

        //no backslashes
        scrubbedURL = scrubbedURL.split("/")[0];

        if ( fakeNewsURLs.indexOf(scrubbedURL) > -1 )  {
          warnAboutFakeNews();
        }
    }
}
);

function warnAboutFakeNews(){
  alert('Warning! The "news" you\'re about to read is fake.');
}