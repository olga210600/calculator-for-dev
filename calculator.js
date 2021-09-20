
const numbers = document.querySelectorAll('.numbers');

const maths = document.querySelectorAll('.maths');

const AC = document.getElementById('AC');

const equal = document.getElementById('equal');

const display = document.querySelector('.display');

let main = {
    firstNum: '',
    action: null,
    secondNum: '',
    result: ''
}

const convertToNum = str => +str;

const isInteger = (num) => {
    return (num ^ 0) === num;
}

numbers.forEach((number) => {
    number.addEventListener('click',(event) => {
        if (!main.firstNum){
            main.firstNum = event.target.innerHTML;
            display.value = main.firstNum;
        }
        else if (main.firstNum && main.action) {
            main.secondNum = main.secondNum.concat(event.target.innerHTML);
            display.value = `${main.firstNum} ${main.action} ${main.secondNum}`;
        }
        else {
            main.firstNum = main.firstNum.concat(event.target.innerHTML);
            display.value = main.firstNum;
        }
    })
})

maths.forEach((math) => {
    math.addEventListener('click',(event) => {
        main.action = event.target.innerHTML;
        display.value = `${main.firstNum} ${main.action} ${main.secondNum}`
    })
})


AC.addEventListener('click',() => {
    main = {
        firstNum: '',
        action: null,
        secondNum: '',
        result: ''
    }
    display.value = '';
})



equal.addEventListener('click',() => {
    if (main.firstNum && main.secondNum && main.action){
        const firstNumber = convertToNum(main.firstNum);
        const secondNumber = convertToNum(main.secondNum);

        switch (main.action) {
            case '+':
                main.result = firstNumber + secondNumber;
                break;
            case '-':
                main.result = firstNumber - secondNumber;
                break;
            case '*':
                main.result = firstNumber * secondNumber;
                break;
            case '/':
                main.result = firstNumber / secondNumber;
                break;
            default:
                break;
        }

        const isInt = isInteger(main.result);

        display.value = `${main.firstNum} ${main.action} ${main.secondNum} = ${isInt ? main.result : main.result.toFixed(2)}`
    }
})


