var video = document.querySelector("#player1"); // videojs($("#player1"));

window.addEventListener("load", function() {
	console.log("Good job opening the window");

});

var playButton = document.querySelector("#play");
// var playButton = document.getElementById("play");

playButton.addEventListener("click", function() {
	if (video.paused = true) {
		video.play();
	} 
	if (video.playing = true) {
		console.log("Playing");
	} 
	document.getElementById("volume").innerHTML = "100%";
});


var pauseButton = document.querySelector("#pause");

pauseButton.addEventListener("click", function() {
	if (video.playing = true){
		video.pause();
	}
	if (video.paused = true) {
		console.log("Paused");
	}
});

// slow down 5% each time the button is clicked, log new speed to console
var slowButton = document.querySelector("#slower");

slowButton.addEventListener("click", function() {
	video.playbackRate = (video.playbackRate * 0.95);
	// FIXME
	console.log("New speed is " + video.playbackRate);
});

// speed up video 5% each time is clicked, log new speed to console (or amount proportional to slow down)
var fastButton = document.querySelector("#faster");

fastButton.addEventListener("click", function(){
	video.playbackRate = (video.playbackRate * 1.05);
	// FIXME
	console.log("New speed is " + video.playbackRate);
});

// skip ahead by 15s (if video length exceeded, go back to start of video), log current location of video
var skipButton = document.querySelector("#skip");

skipButton.addEventListener("click", function() {
	console.log("Original location " + video.currentTime)
	if ((video.currentTime + 15) < video.duration){
		video.currentTime = video.currentTime + 15;
	} else {
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
	console.log("New location is " + video.currentTime);
});

// mute/unmute video and updte text in the button
var muteButton = document.querySelector("#mute");

muteButton.addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	console.log(video.muted);
});

// change volume based on the slider and update volume info
var volume = document.querySelector("#slider");

volume.addEventListener("change", function() {
	video.volume = (volume.value/100);
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
});




// utilize existing oldSchool class on the video element
var oldSchoolButton = document.querySelector("#vintage");

var oldSchoolBeforeFilter = video.style.filter;
var oldSchoolBeforeWidth = video.style.width;
var oldSchoolBeforeBorder = video.style.border;
var oldSchoolBeforeBorderRadius = video.style.borderRadius;

oldSchoolButton.addEventListener("click", function(){
	video.style.filter = "grayscale(100%)";
	video.style.width = "75%";
	video.style.border = "5px double grey";
	video.style.borderRadius = "20px";
});


// remove the oldSchool class from the video
var originalButton = document.querySelector("#orig");

originalButton.addEventListener("click", function() {
	video.style.filter = oldSchoolBeforeFilter;
	video.style.width = oldSchoolBeforeWidth;
	video.style.border = oldSchoolBeforeBorder;
	video.style.borderRadius = oldSchoolBeforeBorderRadius;
});

/*
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
*/
