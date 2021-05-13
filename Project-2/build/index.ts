let hihatSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

let channel1: string[] = [];
let channel1recording: boolean = false;

appStart();

function appStart(): void {
    Channel1();
    getSounds();
}


function Channel1(): void{
    document.body.addEventListener('keypress', onKeyDown);
    const btnChannel1Play = document.querySelector('#Channel1')
    btnChannel1Play.addEventListener('click', onPlayChannel1)
}

function onPlayChannel1(): void{
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound), 100)
    });
}


function startRecording(): void {
    channel1 = [];
    channel1recording = true;
}

function stopRecording(): void {
    channel1recording = false;
}

function play(): void {
    for (let ch1 of this.channel1){
        playSound(ch1);
    }
}

function getSounds(): void {
    hihatSound = document.querySelector('[data-sound="hihat"]')
    clapSound = document.querySelector('[data-sound="clap"]')
    boomSound = document.querySelector('[data-sound="boom"]')
    kickSound = document.querySelector('[data-sound="kick"]')
    openhatSound = document.querySelector('[data-sound="openhat"]')
    rideSound = document.querySelector('[data-sound="ride"]')
    snareSound = document.querySelector('[data-sound="snare"]')
    tinkSound = document.querySelector('[data-sound="tink"]')
    tomSound = document.querySelector('[data-sound="tom"]')
}

function onKeyDown(ev: KeyboardEvent): void {
    console.log(ev);
    const key = ev.key;
    const time = ev.timeStamp;
    if (channel1recording) {
        channel1.push(key);
    }
    playSound(key);
    console.log(channel1);
}

function playSound(key: string): void {
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
