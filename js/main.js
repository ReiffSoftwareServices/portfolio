console.log("JS erfolgreich eingebunden");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
//xhttp.open("GET", "http://www.omdbapi.com/?i=tt3896198&apikey=28a5839e", true);
//xhttp.send();

var request_text1 = "http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&AWSAccessKeyId=AKIAJMVPMMG6P7HCWLPQ&AssociateTag=codenundgutau-21&Operation=ItemLookup&ItemId=B00008OE6I&Timestamp=[YYYY-MM-DDThh:mm:ssZ]&Signature=[Request Signature]"
var request_text2 = "https://webservices.amazon.de/onca/xml?AWSAccessKeyId=AKIAILJU5AEZIWQRBT2A&AssociateTag=lookandcodego-21&Keywords=Bilder&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers&SearchIndex=All&Service=AWSECommerceService&Timestamp=2018-07-15T13%3A39%3A54.000Z&Signature=o9U6vwJqCm5OEVmcdCRWtBTrqKzgF31sbzxhnny3tb8%3D"
var request_text3 = "https://webservices.amazon.com/onca/xml?Service=AWSECommerceService&Operation=ItemLookup&ResponseGroup=Images&IdType=ASIN&&ItemId=B004HO6I4M&AWSAccessKeyId=AKIAJMVPMMG6P7HCWLPQ&AssociateTag=codenundgutau-21&Timestamp=[YYYY-MM-DDThh:mm:ssZ]&Signature=[Request_Signature]"
//xhttp.open("GET", "http://www.omdbapi.com/?i=tt3896198&apikey=28a5839e", true);
xhttp.open("GET", request_text2, true);
xhttp.send();