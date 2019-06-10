const voiceInput = document.querySelector('#voiceInput');
const speechOutput = document.querySelector('h1');

//Create constant for speech API
try {
 const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
 const recognition = new SpeechRecognition();
} catch (e) {
    alert('Unsupported Browser! Please try Firefox or Chrome! (' + e + ')');
}