let minValue = parseInt(prompt('Минимальное знание числа для игры','1'));
if (minValue != 0) {minValue = minValue || 8};
(minValue < 1000) ? minValue = minValue : minValue = 999;
(minValue > -1000) ? minValue = minValue : minValue = -999;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (maxValue != 0) {maxValue = maxValue || 88};
(maxValue < 1000) ? maxValue = maxValue : maxValue = 999;
(maxValue > -1000) ? maxValue = maxValue : maxValue = -999;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

let units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let teens = ['', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let dozens = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

function numberToText() { 
    let number = Math.abs(answerNumber);
    let text = '';
      if (number == 0) {
          text = 'ноль';
          return text;
      }
      if (number <= 9) {
          return units[Math.floor(Math.abs(number) / 1)];
      }
      if (number > 9 && number < 20) {
          return teens[Math.floor(number / 10 + number % 10)];
      }
      if (number >= 20 && number <= 99) {
          return dozens[(Math.floor(number / 10)) - 1] + " " + units[Math.floor(number % 10)];
      }
      if (number >= 100 && number <= 999) {
          return hundreds[Math.floor(number / 100)] + " " + numberToTextHundreds();
      }
    }
function numberToTextHundreds() { 
    let unitsTeensDozens = Math.abs(answerNumber) % 100;
      if (unitsTeensDozens <= 9) {
          return units[Math.floor(unitsTeensDozens / 1)];
      }
      if (unitsTeensDozens > 9 && unitsTeensDozens < 20) {
          return teens[(Math.floor(unitsTeensDozens / 10)) + (unitsTeensDozens % 10)];
      }
      if (unitsTeensDozens >= 20 && unitsTeensDozens <= 99) {
          return dozens[(Math.floor(unitsTeensDozens / 10)) - 1] + " " + units[Math.floor(unitsTeensDozens % 10)];
      }
    }

orderNumberField.innerText = orderNumber;
answerField.innerText = answerNumber >= 0 ? numberToText().length < 20 && answerNumber >= 0 ? `Вы загадали число ${numberToText()}?` : `Вы загадали число ${answerNumber}?` : numberToText().length < 20 ? `Вы загадали число минус ${numberToText()}?` : `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','2'));
    if (minValue != 0) {minValue = minValue || 7};
    (minValue < 1000) ? minValue = minValue : minValue = 997;
    (minValue > -1000) ? minValue = minValue : minValue = -997;
    maxValue = parseInt(prompt('Максимальное знание числа для игры','99'));
    if (maxValue != 0) {maxValue = maxValue || 77};
    (maxValue < 1000) ? maxValue = maxValue : maxValue = 997;
    (maxValue > -1000) ? maxValue = maxValue : maxValue = -997;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    orderNumber = 1;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = answerNumber >= 0 ? numberToText().length < 20 && answerNumber >= 0 ? `Вы загадали число ${numberToText()}?` : `Вы загадали число ${answerNumber}?` : numberToText().length < 20 ? `Вы загадали число минус ${numberToText()}?` : `Вы загадали число ${answerNumber}?`;
    gameRun = true;
  
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь...\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            const phraseRandom = Math.round( Math.random() * 3);
            if (phraseRandom < 1) {
                answerPhrase = 'Да это легко! Ты загадал ';
            } else if (phraseRandom < 2) {
                answerPhrase = 'Наверное, это число...';
            } else {
                answerPhrase = 'Нужно подумать... Быть может, это ';
            }
            
            answerField.innerText = answerNumber >= 0 ? numberToText().length < 20 && answerNumber >= 0 ? `Вы загадали число ${numberToText()}?` : `Вы загадали число ${answerNumber}?` : numberToText().length < 20 ? `Вы загадали число минус ${numberToText()}?` : `Вы загадали число ${answerNumber}?`;
            
            phraseRandom = 0;
            }  
        }
    }
)

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandomLess = Math.round( Math.random() * 3);
            if (phraseRandomLess < 1) {
                answerPhrase = 'Ну что же! Ты загадал ';
            } else if (phraseRandomLess < 2) {
                answerPhrase = 'Слишком просто, это число...';
            } else {
                answerPhrase = 'Внимание на экран... твое число ';
            }
            
            answerField.innerText = answerNumber >= 0 ? numberToText().length < 20 && answerNumber >= 0 ? `Вы загадали число ${numberToText()}?` : `Вы загадали число ${answerNumber}?` : numberToText().length < 20 ? `Вы загадали число минус ${numberToText()}?` : `Вы загадали число ${answerNumber}?`;

            phraseRandomLess = 0;
            }
        }
    }
)

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){

        const phraseRandomEqual = Math.round( Math.random() * 3);
        if (phraseRandomEqual < 1.1) {
            answerPhrase = 'Я всегда угадываю';
        } else if (phraseRandomEqual < 2.3) {
            answerPhrase = 'Это было забавно, сыграем еще?';
        } else {
            answerPhrase = 'Это магия и ничего больше!';
        }
        
        answerField.innerText = answerPhrase;
        phraseRandomEqual = 0;
        gameRun = false;
    }
})

