// Array of song URLs
var songUrls = [
    "https://cs1.mp3.pm/listen/532904/NXYwVEhKSzErakpKN2o0bnpiTTVaY3NFZi9KU241TU9ObWU4WGdVdm5nNW9Ub2NtTENOOHJLY3JRVEdkSi9YTGhmVzJXWDNyZ3NSTmtQVko1cCt2aThIMUozcXVHdE9YNWF4RmNNRk5SdDVwMmFZanM1RW04VzFHN1BXWTBFS1Q/Skazi_-_I_wish_Hit_and_run_version_(mp3.pm).mp3",
    "https://cs1.mp3.pm/listen/60440957/NXYwVEhKSzErakpKN2o0bnpiTTVaVWg0SzVjcldENHJxOHU2dmxhbUlEQTN3bWY0L29mN2t1MUxEOUZsdS9qWjNmZkIyem53Zmd4QkJCRFd4S2trMm5pSEFVeklFN1UxN2hOYWExd0Y0QmEzL2RqSEo5aVlHbTVJQ00zd2JMTHo/Skazi_-_Hit_and_Run_(mp3.pm).mp3",
    "https://cs1.mp3.pm/listen/13004531/NXYwVEhKSzErakpKN2o0bnpiTTVaVWg0SzVjcldENHJxOHU2dmxhbUlERDVTVUhzblNLTUxlTDF6ZjRnWTd3WXNCUkNmQzd2Tm9HQ2FLOUVyYlVuNW85c3NhSmNXMEdielhVeVhLSnRsVkJqeUs4TkorQVZoQlE4S2xoNlFxVFQ/Dj_CRISTAN_-_crazy_frog_electro_bass_(mp3.pm).mp3"
    // add more URLs as needed
];

// Select a random song URL
var randomSongUrl = songUrls[Math.floor(Math.random() * songUrls.length)];

// Get the audio element
var audioElement = document.getElementById("myAudio");

// Create a new source element
var sourceElement = document.createElement("source");

// Set the source element's attributes
sourceElement.src = randomSongUrl;
sourceElement.type = "audio/mpeg";

// Add the source element to the audio element
audioElement.appendChild(sourceElement);

// Play the audio
audioElement.play();

var myAudio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");

playButton.addEventListener("click", function() {
    if (myAudio.paused) {
        myAudio.play();
        playButton.textContent = "Pause";
    } else {
        myAudio.pause();
        playButton.textContent = "Play";
    }
});