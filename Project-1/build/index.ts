import * as Bootstrap from 'bootstrap';

class Project1 {

    numberofInputs: HTMLInputElement;
    input1Input: HTMLInputElement;
    input2Input: HTMLInputElement;
    input3Input: HTMLInputElement;
    input4Input: HTMLInputElement;


    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;
    inputs: HTMLInputElement[] = [];


    constructor() {
        this.startApp();
    }

    startApp() {
        this.numberofInputs = document.querySelector('#numberofinputs');
        this.numberofInputs.addEventListener("change", () => this.renderInput());
        this.getInputs();
        //this.watchInputValues();
    }

    renderInput() {
        this.numberofInputs = document.querySelector('#numberofinputs');
        const value = this.numberofInputs.value;
        const inputContainer = document.getElementById("box");
        while (inputContainer.firstChild) {
            inputContainer.firstChild.remove();
        }
        this.inputs = [];

        for (let i = 0; i < Number(value); i++) {
            const inputElement = document.createElement('input');
            /*create element div dla forma
            create element div dla spinnera*/

            inputElement.addEventListener('input', () => this.computeData());
            inputContainer.appendChild(inputElement);
            this.inputs.push(inputElement);
        }

    }

    getInputs() {
        this.input1Input = document.querySelector('#input1');
        this.input2Input = document.querySelector('#input2');
        this.input3Input = document.querySelector('#input3');
        this.input4Input = document.querySelector('#input4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }

   /* watchInputValues() {
        this.input1Input.addEventListener('input', () => this.computeData());
        this.input2Input.addEventListener('input', () => this.computeData());
        this.input3Input.addEventListener('input', () => this.computeData());
        this.input4Input.addEventListener('input', () => this.computeData());
    }*/

    computeData() {
        let values: number[] = [];
        for (var input of this.inputs) {
            values.push(Number(input.value));
        }
        var sum = 0;
        for (var i in values) {
            sum += values[i];
        }

        var avg = sum / values.length;

        const min = Math.min.apply(Math, values);
        const max = Math.max.apply(Math, values);

        this.showStats(sum, avg, min, max);
    }

    showStats(sum: number, avg: number, min: number, max: number) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }
}

const project1 = new Project1();
