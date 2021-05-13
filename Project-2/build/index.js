var hihatSound;
var clapSound;
var boomSound;
var kickSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var tomSound;
var channel1 = [];
var channel1recording = false;
appStart();
function appStart() {
    Channel1();
    getSounds();
}
function Channel1() {
    document.body.addEventListener('keypress', onKeyDown);
    var btnChannel1Play = document.querySelector('#Channel1');
    btnChannel1Play.addEventListener('click', onPlayChannel1);
}
function onPlayChannel1() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound); }, 100);
    });
}
function startRecording() {
    channel1 = [];
    channel1recording = true;
}
function stopRecording() {
    channel1recording = false;
}
function play() {
    for (var _i = 0, _a = this.channel1; _i < _a.length; _i++) {
        var ch1 = _a[_i];
        playSound(ch1);
    }
}
function getSounds() {
    hihatSound = document.querySelector('[data-sound="hihat"]');
    clapSound = document.querySelector('[data-sound="clap"]');
    boomSound = document.querySelector('[data-sound="boom"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    tomSound = document.querySelector('[data-sound="tom"]');
}
function onKeyDown(ev) {
    console.log(ev);
    var key = ev.key;
    var time = ev.timeStamp;
    if (channel1recording) {
        channel1.push(key);
    }
    playSound(key);
    console.log(channel1);
}
function playSound(key) {
    switch (key) {
        case 'a':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 's':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 'd':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case 'f':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 'g':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case 'h':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 'j':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case 'k':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case 'l':
            tomSound.currentTime = 0;
            tomSound.play();
            break;
    }
}
