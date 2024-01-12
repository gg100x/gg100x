// Define an array of YouTube video URLs
var videoUrls = [
    "https://www.youtube.com/watch?v=PIL2ttBqTsM",
    "https://www.youtube.com/watch?v=Es2g2R1_vgg",
    "https://www.youtube.com/watch?v=L7dZJSVlWAE",
    "https://www.youtube.com/watch?v=Xe1-8K7b7Fg",
    "https://www.youtube.com/watch?v=rq9W2wJw7U4"
];

// Function to convert a regular YouTube watch URL into an embed URL
function convertToEmbedUrl(url) {
    var videoId = url.split('v=')[1];
    var ampersandPosition = videoId.indexOf('&');
    if(ampersandPosition != -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    return "https://www.youtube.com/embed/" + videoId;
}

// Convert all URLs in the array to embed URLs
for (var i = 0; i < videoUrls.length; i++) {
    videoUrls[i] = convertToEmbedUrl(videoUrls[i]);
}

// Generate a random number between 0 and the length of the videoUrls array
var randomIndex = Math.floor(Math.random() * videoUrls.length);

// Select a random video URL from the array
var randomVideoUrl = videoUrls[randomIndex];

// Get the iframe element from the HTML document
var iframeElement = document.getElementById("myIframe");

// Set the 'src' attribute of the iframe to the random video URL
// Add "?autoplay=1" to the URL to enable autoplay
iframeElement.src = randomVideoUrl + "?autoplay=1&mute=0";
