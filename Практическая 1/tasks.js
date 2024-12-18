// 1. Сохранение введенного числа
let number = prompt('Пожалуйста, введите любое число:');
console.log('Вы ввели число:', number);

// 2. Калькулятор
function calculator() {
    let num1 = parseFloat(prompt('Введите первое число:'));
    let num2 = parseFloat(prompt('Введите второе число:'));
    
    let sum = num1 + num2;
    let subtract = num1 - num2;
    let multiply = num1 * num2;
    let divide = num1 / num2;
    
    alert(`Результаты операций:
    Сложение: ${num1} + ${num2} = ${sum}
    Вычитание: ${num1} - ${num2} = ${subtract}
    Умножение: ${num1} * ${num2} = ${multiply}
    Деление: ${num1} / ${num2} = ${divide}`);
}

// 3. Угадывание задуманного числа
function guessNumber() {
    let result = prompt('Задумайте число, умножьте его на 2 и прибавьте 7. Введите полученный результат:');
    let originalNumber = (result - 7) / 2;
    alert(`Вы задумали число: ${originalNumber}`);
}

// 4. Вычисление возраста
function calculateAge() {
    let name = prompt('Введите ваше имя:');
    let birthYear = parseInt(prompt('Введите год вашего рождения:'));
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    
    document.write(`${name}: ${age}`);
} 