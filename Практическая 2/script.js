let отгадки = 0;

// Загадки и ответы
const загадки = [
    {
        вопрос: "Не лает, не кусает, а в дом не пускает?",
        ответ: "замок"
    },
    {
        вопрос: "Висит груша, нельзя скушать?",
        ответ: "лампочка"
    }
];

function начатьИгру() {
    const gameDiv = document.getElementById('game');
    const resultDiv = document.getElementById('result');
    
    // Первая загадка
    let ответПользователя = prompt(загадки[0].вопрос);
    if (ответПользователя && ответПользователя.toLowerCase() === загадки[0].ответ) {
        alert("Верно :)");
        отгадки++;
    } else {
        alert("Неверно :(");
    }

    // Вторая загадка
    ответПользователя = prompt(загадки[1].вопрос);
    if (ответПользователя && ответПользователя.toLowerCase() === загадки[1].ответ) {
        alert("Верно :)");
        отгадки++;
    } else {
        alert("Неверно :(");
    }

    // Вывод результата
    resultDiv.textContent = `Игра окончена! Правильных ответов: ${отгадки} из ${загадки.length}`;
}

// Задание 2 - Счёт от 1 до 10
function считатьДоДесяти() {
    const resultDiv = document.getElementById('counting-result');
    let результат = '';
    
    for(let i = 1; i <= 10; i++) {
        результат += i + ' ';
    }
    
    resultDiv.textContent = результат;
}

// Задание 3 - Программа для застолий
function начатьЗастолье() {
    const resultDiv = document.getElementById('party-result');
    let результат = '';
    let продолжать;
    
    do {
        результат += "Наливаем! 🍷\n";
        продолжать = prompt("Еще по одной? (введите 1 чтобы остановиться, любое другое значение чтобы продолжить)");
    } while (продолжать !== "1");
    
    результат += "Застолье окончено!";
    resultDiv.textContent = результат;
}

// Задание 4 - Вычисление факториала
function вычислитьФакториал() {
    const число = parseInt(document.getElementById('factorial-input').value);
    const resultDiv = document.getElementById('factorial-result');
    
    if (isNaN(число) || число < 0) {
        resultDiv.textContent = 'Пожалуйста, введите положительное число';
        return;
    }

    let факториал = 1;
    for (let i = 2; i <= число; i++) {
        факториал *= i;
    }
    
    resultDiv.textContent = `Факториал числа ${число} равен ${факториал}`;
}

// Задание 5 - Проверка на палиндром
function проверитьПалиндром() {
    const фамилия = document.getElementById('palindrome-input').value.toLowerCase();
    const resultDiv = document.getElementById('palindrome-result');
    
    if (!фамилия) {
        resultDiv.textContent = 'Пожалуйста, введите фамилию';
        return;
    }

    // Удаляем все пробелы и знаки препинания
    const очищенная = фамилия.replace(/[^а-яё]/g, '');
    const обратная = очищенная.split('').reverse().join('');
    
    if (очищенная === обратная) {
        resultDiv.textContent = `Фамилия "${фамилия}" является палиндромом!`;
    } else {
        resultDiv.textContent = `Фамилия "${фамилия}" не является палиндромом`;
    }
}

// Задание 6 - Поиск простых чисел
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function найтиПростыеЧисла() {
    const число = parseInt(document.getElementById('prime-input').value);
    const resultDiv = document.getElementById('prime-result');
    
    if (isNaN(число) || число < 1) {
        resultDiv.textContent = 'Пожалуйста, введите положительное число больше 1';
        return;
    }

    const простыеЧисла = [];
    for (let i = 1; i <= число; i++) {
        if (isPrime(i)) {
            простыеЧисла.push(i);
        }
    }
    
    resultDiv.textContent = `Простые числа от 1 до ${число}: ${простыеЧисла.join(', ')}`;
}

// Запускаем игру при загрузке страницы
window.onload = начатьИгру; 