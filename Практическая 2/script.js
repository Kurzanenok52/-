// Загадки
const загадки = [
    { вопрос: "Не лает, не кусает, а в дом не пускает?", ответ: "замок" },
    { вопрос: "Висит груша, нельзя скушать?", ответ: "лампочка" }
];

function начатьИгру() {
    let отгадки = 0;
    загадки.forEach(загадка => {
        const ответ = prompt(загадка.вопрос);
        if (ответ?.toLowerCase() === загадка.ответ) {
            alert("Верно :)");
            отгадки++;
        } else {
            alert("Неверно :(");
        }
    });
    document.getElementById('result').textContent = 
        `Игра окончена! Правильных ответов: ${отгадки} из ${загадки.length}`;
}

// Счёт от 1 до 10
function считатьДоДесяти() {
    document.getElementById('counting-result').textContent = 
        [...Array(10)].map((_, i) => i + 1).join(' ');
}

// Застолье
function начатьЗастолье() {
    let результат = '';
    while (prompt("Еще по одной? (1 - стоп)") !== "1") {
        результат += "Наливаем! 🍷\n";
    }
    document.getElementById('party-result').textContent = результат + "Застолье окончено!";
}

// Факториал
function вычислитьФакториал() {
    const число = parseInt(document.getElementById('factorial-input').value);
    if (isNaN(число) || число < 0) {
        return document.getElementById('factorial-result').textContent = 
            'Введите положительное число';
    }
    const факториал = [...Array(число)].reduce((acc, _, i) => acc * (i + 1), 1);
    document.getElementById('factorial-result').textContent = 
        `Факториал числа ${число} равен ${факториал}`;
}

// Палиндром
function проверитьПалиндром() {
    const фамилия = document.getElementById('palindrome-input').value.toLowerCase();
    if (!фамилия) {
        return document.getElementById('palindrome-result').textContent = 
            'Введите фамилию';
    }
    const очищенная = фамилия.replace(/[^а-яё]/g, '');
    document.getElementById('palindrome-result').textContent = 
        `Фамилия "${фамилия}" ${очищенная === очищенная.split('').reverse().join('') ? 
        'является' : 'не является'} палиндромом`;
}

// Простые числа
function найтиПростыеЧисла() {
    const число = parseInt(document.getElementById('prime-input').value);
    if (isNaN(число) || число < 1) {
        return document.getElementById('prime-result').textContent = 
            'Введите положительное число больше 1';
    }
    const простые = [...Array(число + 1)].map((_, i) => i)
        .filter(num => {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++)
                if (num % i === 0) return false;
            return true;
        });
    document.getElementById('prime-result').textContent = 
        `Простые числа от 1 до ${число}: ${простые.join(', ')}`;
}

window.onload = начатьИгру; 