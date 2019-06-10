//Browser Compatibility check
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
    alert('This browser is not supported. Please use an up to date version of Chrome');
}

//Define Constants
const voiceInput = document.querySelector('#voiceInput');
const speechOutput = document.querySelector('h3');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();


recognition.onstart = () => {
    console.log('Voice activated. You can speak');
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

function readOutLoud(message) {
    const voices = speechSynthesis.getVoices();
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.voice = voices[5];
    speech.text = messageHandler(message);

    window.speechSynthesis.speak(speech);
}

function messageHandler(message) {
    let text = 'Background set to ';

    //Blues
    if (message.includes(x = 'blue') || message.includes(x = 'Cerulean') || message.includes(x = 'azure')) {
        message = text + x;
        setBg('#4988ed');

    }
    //Greens
    else if (message.includes(x = 'green') || message.includes(x = 'tree') ) {
        message = text + x;
        setBg('#4cce77');
    } 
    else if (message.includes(x = 'khaki') || message.includes(x = 'dark green')) {
        message = text + x;
        setBg('#005110');
    }
    //Reds
    else if (message.includes(x = 'red')) {
        message = text + x;
        setBg('#ba0707');
    }
     else if (message.includes(x = 'pink') || message.includes(x = 'rose')) {
        message = text + x;
        setBg('#ff8989');
    }
    //Unrecognized
    else {
        message = 'I don\'t recognize that colour';
    }
    return message;
}

function setBg(colour) {
    document.querySelector('body').style.background = colour;
}