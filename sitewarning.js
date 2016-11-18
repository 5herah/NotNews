chrome.tabs.onUpdated.addListener(
function ( tabId, changeInfo, tab )
{
  var fakeNewsURLs  = getFakeNewsURLs();
      categories    = getCategories();

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

        fakeNewsURLs.forEach(function(el){

          if(el.site == scrubbedURL){
              var theseCats = el.categories,
                  cats      = '';

              theseCats.forEach(function(el){
                cats += (categories[el.toString()] + '\n\n');
              })
                alert('Warning! The "news" you\'re about to read is either fake or questionable.\n\n' + cats);
          }

        });

    }
}
);

function getCategories(){
  return [
    '',
    'Questionableness Category 1: This is a fake, false, or regularly misleading website that is shared on Facebook and social media. This website may rely on “outrage” by using distorted headlines and decontextualized or dubious information in order to generate likes, shares, and profits.',
    'Questionableness Category 2: This website may circulate misleading and/or potentially unreliable information.',
    'Questionableness Category 3: This website sometimes uses clickbait-y headlines and social media descriptions.',
    'Questionableness Category 4: This website is purposefully fake with the intent of satire/comedy, which can offer important critical commentary on politics and society, but has the potential to be shared as actual/literal news. It has the potential to perpetuate misinformation based on different audience (mis)interpretations. Make sure that anyone who reads a story on this website understands its purpose.'

  ];
}