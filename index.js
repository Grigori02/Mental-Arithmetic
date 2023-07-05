const bodyContent = document.getElementById('body-content');
const speed = document.getElementById('speed');
const complication = document.getElementById('complication');


function startGame() {
    const speedText = speed.options[speed.selectedIndex].text;
    const complicationText = complication.options[complication.selectedIndex].text;
    let interval;
    switch (complicationText) {
        case 'hard':
            interval = setInterval(function () {
                main(interval, complicationText)
            }, 1000 * speedText)
            break;
        case 'medium':
            interval = setInterval(function () {
                main(interval, complicationText)
            }, 1000 * speedText)
            break;
        case 'weak':
            interval = setInterval(function () {
                main(interval)
            }, 1000 * speedText)
            break;
    }
}


function main(interval) {
    const oneDigits = Math.floor((Math.random() * 9) + 1);
    const twoDigits = Math.floor((Math.random() * 90) + 10);
    if (arguments[1] === 'hard') {
        displayNum(twoDigits, interval)
    } else if (arguments[1] === 'medium') {
        if (count < 3) {
            console.log(oneDigits)
            sum += oneDigits;
            bodyContent.innerHTML = `<p>${oneDigits}</p>`;
            ++count;
        } else if (count >= 3) {
            displayNum(twoDigits, interval)
        }
    } else{
        displayNum(oneDigits, interval)
    }
}

let sum = 0;
let count = 0;
function displayNum(number, interval) {
    console.log(number)
    sum += number;
    bodyContent.innerHTML = `<p>${number}</p>`;
    ++count;
    if (count === 5) {
        count = 0;
        clearInterval(interval);
        checkAnswer();
    }
}
function checkAnswer() {
    setTimeout(function () {
        let sumIs = prompt('please write the numbers sum');
        if (+sumIs === sum) {
            alert('The answer is correct!')
        } else {
            alert(`The answer is wrong...The sum is ${sum}`)
        }
        console.log(sum)
        sum = 0;
    }, 1000)
}

function cleanContent() {
    bodyContent.innerHTML = '';
}


