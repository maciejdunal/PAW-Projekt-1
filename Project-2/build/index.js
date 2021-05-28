var hihatSound;
var clapSound;
var boomSound;
var kickSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var tomSound;
var recordChannel1 = document.getElementById("recordChannel1");
var stopChannel1 = document.getElementById("stopChannel1");
var playChannel1 = document.getElementById("playChannel1");
var recordChannel2 = document.getElementById("recordChannel2");
var stopChannel2 = document.getElementById("stopChannel2");
var playChannel2 = document.getElementById("playChannel2");
var recordChannel3 = document.getElementById("recordChannel3");
var stopChannel3 = document.getElementById("stopChannel3");
var playChannel3 = document.getElementById("playChannel3");
var recordChannel4 = document.getElementById("recordChannel4");
var stopChannel4 = document.getElementById("stopChannel4");
var playChannel4 = document.getElementById("playChannel4");
var channel1tmp = [];
var channel1recording = false;
var channel1recordingStart;
var channel1;
var channel2;
var channel3;
var channel4;
appStart();
function appStart() {
    channel1 = new Channel();
    channel2 = new Channel();
    channel3 = new Channel();
    channel4 = new Channel();
    Channel1();
    getSounds();
}
function Channel1() {
    document.body.addEventListener('keypress', onKeyDown);
    var btnChannel1Play = document.querySelector('#playChannel1');
    btnChannel1Play.addEventListener('click', onPlayRecording1);
}
/*function onPlayChannel1(): void {
    channel1tmp.forEach(keyPressedEvent => {
        setTimeout(() => playSound(keyPressedEvent.key), keyPressedEvent.timestamp)
    });
}*/
/*
function stopRecording(): void {
    channel1recording = false;
}
*/
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
        channel1tmp.push(new KeyPressedEvent(key, time - channel1recordingStart));
    }
    playSound(key);
    console.log(channel1tmp);
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
var KeyPressedEvent = /** @class */ (function () {
    function KeyPressedEvent(key, timestamp) {
        this.key = key;
        this.timestamp = timestamp;
    }
    return KeyPressedEvent;
}());
var Channel = /** @class */ (function () {
    function Channel() {
        this.keyPressedEvents = [];
        this.isRecording = false;
    }
    Channel.prototype.startRecording = function (e, channelNumber) {
        this.keyPressedEvents = [];
        this.isRecording = true;
        this.startRecordingTimeStamp = e.timeStamp;
        if (channelNumber === 1) {
            channel1.startRecording(e, 1);
            recordChannel1.disabled = true;
            stopChannel1.disabled = false;
        }
        if (channelNumber === 2) {
            channel2.startRecording(e, 2);
            recordChannel2.disabled = true;
            stopChannel2.disabled = false;
        }
        if (channelNumber === 3) {
            channel3.startRecording(e, 3);
            recordChannel3.disabled = true;
            stopChannel3.disabled = false;
        }
        if (channelNumber === 4) {
            channel4.startRecording(e, 4);
            recordChannel4.disabled = true;
            stopChannel4.disabled = false;
        }
    };
    Channel.prototype.stopRecording = function (channelNumber) {
        if (channelNumber === 1) {
            this.isRecording = false;
            recordChannel1.disabled = false;
            stopChannel1.disabled = true;
            playChannel1.disabled = false;
        }
        if (channelNumber === 2) {
            this.isRecording = false;
            recordChannel2.disabled = false;
            stopChannel2.disabled = true;
            playChannel2.disabled = false;
        }
        if (channelNumber === 3) {
            this.isRecording = false;
            recordChannel3.disabled = false;
            stopChannel3.disabled = true;
            playChannel3.disabled = false;
        }
        if (channelNumber === 4) {
            this.isRecording = false;
            recordChannel4.disabled = false;
            stopChannel4.disabled = true;
            playChannel4.disabled = false;
        }
    };
    Channel.prototype.playRecording = function (channelNumber) {
        if (channelNumber === 1) {
            this.keyPressedEvents.forEach(function (keyPressedEvent) {
                setTimeout(function () { return playSound(keyPressedEvent.key); }, keyPressedEvent.timestamp);
            });
        }
        if (channelNumber === 2) {
            this.keyPressedEvents.forEach(function (keyPressedEvent) {
                setTimeout(function () { return playSound(keyPressedEvent.key); }, keyPressedEvent.timestamp);
            });
        }
        if (channelNumber === 3) {
            this.keyPressedEvents.forEach(function (keyPressedEvent) {
                setTimeout(function () { return playSound(keyPressedEvent.key); }, keyPressedEvent.timestamp);
            });
        }
        if (channelNumber === 4) {
            this.keyPressedEvents.forEach(function (keyPressedEvent) {
                setTimeout(function () { return playSound(keyPressedEvent.key); }, keyPressedEvent.timestamp);
            });
        }
    };
    Channel.prototype.onKeyDown = function (ev, channelNumber) {
        console.log(ev);
        var key = ev.key;
        var time = ev.timeStamp;
        if (channelNumber === 1) {
            if (this.isRecording) {
                this.keyPressedEvents.push(new KeyPressedEvent(key, time - this.startRecordingTimeStamp));
            }
        }
        if (channelNumber === 2) {
            if (this.isRecording) {
                this.keyPressedEvents.push(new KeyPressedEvent(key, time - this.startRecordingTimeStamp));
            }
        }
        if (channelNumber === 3) {
            if (this.isRecording) {
                this.keyPressedEvents.push(new KeyPressedEvent(key, time - this.startRecordingTimeStamp));
            }
        }
        if (channelNumber === 4) {
            if (this.isRecording) {
                this.keyPressedEvents.push(new KeyPressedEvent(key, time - this.startRecordingTimeStamp));
            }
        }
        playSound(key);
        console.log(this.keyPressedEvents);
    };
    return Channel;
}());
