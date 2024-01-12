// Define an array of YouTube video URLs
var videoUrls = [
    "https://www.youtube.com/embed/PIL2ttBqTsM",
];

// Generate a random number between 0 and the length of the videoUrls array
var randomIndex = Math.floor(Math.random() * videoUrls.length);

// Select a random video URL from the array
var randomVideoUrl = videoUrls[randomIndex];

// Get the iframe element from the HTML document
var iframeElement = document.getElementById("myIframe");

// Set the 'src' attribute of the iframe to the random video URL
// Add "?autoplay=1" to the URL to enable autoplay
iframeElement.src = randomVideoUrl + "?autoplay=1&mute=0";
