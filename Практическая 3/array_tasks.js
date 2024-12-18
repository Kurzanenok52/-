// Вспомогательные функции
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const createArray = (length) => Array.from({length}, () => getRandomInt(-10, 30));
const average = (arr) => arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2) : 0;
const displayResult = (id, html) => document.getElementById(id).innerHTML = html;

// Задача 1: Среднее арифметическое положительных элементов
function task1() {
    const arr = createArray(15);
    const positiveNums = arr.filter(num => num > 0);
    
    displayResult('task1-result', `
        <p>Массив: ${arr.join(', ')}</p>
        <p>Среднее арифметическое положительных: ${average(positiveNums)}</p>
    `);
}

// Задача 2: Замена отрицательных элементов их квадратами
function task2() {
    const arr = createArray(15);
    const modifiedArr = arr.map(num => num < 0 ? num * num : num);
    
    displayResult('task2-result', `
        <p>Исходный массив: ${arr.join(', ')}</p>
        <p>Массив после замены: ${modifiedArr.join(', ')}</p>
    `);
}

// Задача 3: Статистика по массиву
function task3() {
    const arr = createArray(15);
    const positiveNums = arr.filter(num => num > 0);
    const negativeNums = arr.filter(num => num < 0);
    
    displayResult('task3-result', `
        <p>Массив: ${arr.join(', ')}</p>
        <p>Среднее положительных: ${average(positiveNums)}</p>
        <p>Среднее отрицательных: ${average(negativeNums)}</p>
        <p>Количество нулей: ${arr.filter(num => num === 0).length}</p>
    `);
}

// Задача 4: Симулятор цветов
function task4() {
    const iterations = 1000000;
    let redCount = 0, maxRedStreak = 0, currentRedStreak = 0;
    
    for(let i = 0; i < iterations; i++) {
        const isRed = Math.floor(Math.random() * 3) === 0;
        if(isRed) {
            redCount++;
            maxRedStreak = Math.max(maxRedStreak, ++currentRedStreak);
        } else {
            currentRedStreak = 0;
        }
    }
    
    displayResult('task4-result', `
        <p>Всего красных выпало: ${redCount}</p>
        <p>Максимальная последовательность красных: ${maxRedStreak}</p>
        <p>Процент красных: ${((redCount / iterations) * 100).toFixed(2)}%</p>
    `);
} 