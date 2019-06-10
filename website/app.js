//Check browser Support
// try {
//     var compatibilityCheck = window.speechRecognition || window.webkitSpeechRecognition;
// } catch (e) {
//     alert('Unsupported Browser! Please try the lasest version of Firefox or Chrome! (' + e + ')');
// }

//Define Constants
const voiceInput = document.querySelector('#voiceInput');
const speechOutput = document.querySelector('h1');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


recognition.onstart = () => {
    console.log ('Voice activated. You can speak');
}

recognition.onresult = (e) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    speechOutput.textContent = transcript;
    readOutLoud(transcript);
}

voiceInput.addEventListener('click', () => {
    recognition.start();
});

//Init Voices
speechSynthesis.getVoices();

function readOutLoud(message){
    const voices = speechSynthesis.getVoices();
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.voice = voices[5];

    window.speechSynthesis.speak(speech);
}