// Initialization
var canvas = document.getElementById('preview');
var context = canvas.getContext('2d');
var video = document.getElementById('video');
var socket = io();

// Canvas Settings
canvas.width = 800;
canvas.height = 600;
context.width = canvas.width;
context.height = canvas.height;

// Video Functions
function viewVideo (video, context) {
    context.drawImage(video, 0, 0, context.width, context.height);
}
function init () {
    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitgetUserMedia || navigator.mozgetUserMedia || navigator.msggetUserMedia);
    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, loadPass, loadFail)
    }
}
function loadPass (stream) {
    video.srcObject = stream;
}
function loadFail () {
    alert("Video Transmission Failed");
}