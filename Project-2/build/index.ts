let hihatSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

let channel1: KeyPressedEvent[] = [];
let channel1recording: boolean = false;
let channel1recordingStart: number;

let channel2: KeyPressedEvent[] = [];
let channel2recording: boolean = false;
let channel2recordingStart: number;

let channel3: KeyPressedEvent[] = [];
let channel3recording: boolean = false;
let channel3recordingStart: number;

let channel4: KeyPressedEvent[] = [];
let channel4recording: boolean = false;
let channel4recordingStart: number;


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
    channel1.forEach(keyPressedEvent => {
        setTimeout(() => playSound(keyPressedEvent.key), keyPressedEvent.timestamp)
    });
}


function startRecording(e): void {
    channel1 = [];
    channel1recording = true;
    channel1recordingStart= e.timeStamp;

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
        channel1.push(new KeyPressedEvent(key, time-channel1recordingStart));
    }
    if (channel2recording) {
        channel2.push(new KeyPressedEvent(key, time-channel2recordingStart));
    }
    if (channel3recording) {
        channel3.push(new KeyPressedEvent(key, time-channel3recordingStart));
    }
    if (channel4recording) {
        channel4.push(new KeyPressedEvent(key, time-channel4recordingStart));
    }
    playSound(key);
    console.log(channel1);
}

function playRecording(): void {

    this.channel1.forEach(keyPressedEvent => {
        setTimeout(() => playSound(keyPressedEvent.key), keyPressedEvent.timestamp)
    });

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

class KeyPressedEvent{
    key: string;
    timestamp: number;

    constructor(key: string, timestamp: number) {
        this.key = key;
        this.timestamp = timestamp;
    }
}
