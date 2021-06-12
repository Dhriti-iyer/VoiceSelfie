var SpeechRecogniser = window.webkitSpeechRecognition;

var recognition = new SpeechRecogniser();

var Textbox = document.getElementById("textbox");

function start() {
    Textbox.innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var result = event.results[0][0].transcript;
    Textbox.innerHTML = result;
    console.log(result);
    speak();
}
function speak() {
    var synth = window.speechSynthesis;
    var speak_Data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_Data);
    if (speak_Data == "take my selfie") {
        utterThis = new SpeechSynthesisUtterance("taking your selfie in 5 seconds");
        synth.speak(utterThis);
        Webcam.set({
            width: 360,
            height: 250,
            img_format: 'jpg',
            jpg_quality: 90
        });
        camera = document.getElementById("camera");
        Webcam.attach("camera");
        setTimeout(function () {
            take_selfie();
            save();
        }, 5000);
    }
    else {

        synth.speak(utterThis);
    }

}
function take_selfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="' + data_uri + '"/>';
    })
}
function save()
{
    link= document.getElementById("link");
    image= document.getElementById("selfie_img").src;
    link.href=image;
    link.click();   
}
