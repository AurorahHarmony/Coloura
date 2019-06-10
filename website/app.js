//Browser Compatibility check
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    alert('This browser is not supported. Please use an up to date version of Chrome');
}

//Define Constants
const voiceInput = document.querySelector('#voiceInput');
const speechOutput = document.querySelector('h1');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
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