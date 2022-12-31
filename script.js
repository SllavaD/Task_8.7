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

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

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
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
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
            
            answerField.innerText = answerPhrase + answerNumber + '?';
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
            
            answerField.innerText = answerPhrase + answerNumber + '?';
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

