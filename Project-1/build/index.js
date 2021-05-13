"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project1 = /** @class */ (function () {
    function Project1() {
        this.inputs = [];
        this.startApp();
    }
    Project1.prototype.startApp = function () {
        var _this = this;
        this.numberofInputs = document.querySelector('#numberofinputs');
        this.numberofInputs.addEventListener("change", function () { return _this.renderInput(); });
        this.getInputs();
        //this.watchInputValues();
    };
    Project1.prototype.renderInput = function () {
        var _this = this;
        this.numberofInputs = document.querySelector('#numberofinputs');
        var value = this.numberofInputs.value;
        var inputContainer = document.getElementById("box");
        while (inputContainer.firstChild) {
            inputContainer.firstChild.remove();
        }
        this.inputs = [];
        for (var i = 0; i < Number(value); i++) {
            var inputElement = document.createElement('input');
            /*create element div dla forma
            create element div dla spinnera*/
            inputElement.addEventListener('input', function () { return _this.computeData(); });
            inputContainer.appendChild(inputElement);
            this.inputs.push(inputElement);
        }
    };
    Project1.prototype.getInputs = function () {
        this.input1Input = document.querySelector('#input1');
        this.input2Input = document.querySelector('#input2');
        this.input3Input = document.querySelector('#input3');
        this.input4Input = document.querySelector('#input4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    /* watchInputValues() {
         this.input1Input.addEventListener('input', () => this.computeData());
         this.input2Input.addEventListener('input', () => this.computeData());
         this.input3Input.addEventListener('input', () => this.computeData());
         this.input4Input.addEventListener('input', () => this.computeData());
     }*/
    Project1.prototype.computeData = function () {
        var values = [];
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            values.push(Number(input.value));
        }
        var sum = 0;
        for (var i in values) {
            sum += values[i];
        }
        var avg = sum / values.length;
        var min = Math.min.apply(Math, values);
        var max = Math.max.apply(Math, values);
        this.showStats(sum, avg, min, max);
    };
    Project1.prototype.showStats = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return Project1;
}());
var project1 = new Project1();
