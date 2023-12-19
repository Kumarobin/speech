function speak() {
    var textToSpeak = document.getElementById('textToSpeak').value;
    var utterance = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(utterance);
}
