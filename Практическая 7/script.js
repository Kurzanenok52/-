// Задача 1: Создание объектов
// Создаем объект "Клиент банка"
const bankClient = {
    firstName: "Иван",
    lastName: "Петров",
    accountNumber: "40817810099910004312",
    balance: 50000,
    accountType: "Сберегательный"
};

// Создаем объект "Работник клиники"
const clinicEmployee = {
    firstName: "Мария",
    lastName: "Иванова",
    position: "Терапевт",
    department: "Терапевтическое отделение",
    experience: 5,
    licenseNumber: "ЛО-77-01-012345"
};

// Создаем объект "Гражданин РФ"
const citizen = {
    firstName: "Алексей",
    lastName: "Сидоров",
    passportNumber: "4510 123456",
    birthDate: "01.01.1990",
    birthPlace: "г. Москва",
    citizenship: "РФ"
};

// Функция для вывода результатов на страницу
function displayResults(elementId, content) {
    document.getElementById(elementId).innerHTML = content;
}

// Выводим свойства объектов
let task1Result = `
<h3>Задача 1: Объекты</h3>
<h4>Клиент банка:</h4>
<pre>${JSON.stringify(bankClient, null, 2)}</pre>
<h4>Работник клиники:</h4>
<pre>${JSON.stringify(clinicEmployee, null, 2)}</pre>
<h4>Гражданин РФ:</h4>
<pre>${JSON.stringify(citizen, null, 2)}</pre>
`;
displayResults('task1', task1Result);

// Задача 2: Переписываем if на switch
let task2Result = `
<h3>Задача 2: Switch вместо if</h3>
<p>При нажатии на кнопку появится диалоговое окно для ввода числа</p>
`;
displayResults('task2', task2Result);

function checkNumber() {
    const number = +prompt('Загадайте цифру до 9', '');
    let result = '';
    
    switch(number) {
        case 1:
            result = 'Вы ввели число 1';
            break;
        case 2:
            result = 'Вы ввели число 2';
            break;
        case 3:
            result = 'Вы ввели число 3';
            break;
        case 4:
            result = 'Вы ввели число 4';
            break;
        case 5:
            result = 'Вы ввели число 5';
            break;
        case 6:
            result = 'Вы ввели число 6';
            break;
        case 7:
            result = 'Вы ввели число 7';
            break;
        case 8:
        case 9:
            result = 'Вы ввели число 8, а может и 9';
            break;
        default:
            result = 'Вы ввели неверное число';
    }
    alert(result);
}

// Задача 3: Определение четверти часа
const min = 30; // Можно изменить значение для проверки
let quarterResult = '';

switch(true) {
    case min >= 0 && min < 15:
        quarterResult = 'Первая четверть часа';
        break;
    case min >= 15 && min < 30:
        quarterResult = 'Вторая четверть часа';
        break;
    case min >= 30 && min < 45:
        quarterResult = 'Третья четверть часа';
        break;
    case min >= 45 && min < 60:
        quarterResult = 'Четвертая четверть часа';
        break;
    default:
        quarterResult = 'Некорректное значение минут';
}

let task3Result = `
<h3>Задача 3: Определение четверти часа</h3>
<p>Для минуты ${min}: ${quarterResult}</p>
`;
displayResults('task3', task3Result);

// Задача 4: Проверка первой цифры и поиск номера телефона
const numberString = "12345678900";
const phoneNumber = "1234567890";

const firstDigit = numberString[0];
const digitResult = (firstDigit === '1' || firstDigit === '2' || firstDigit === '3') 
    ? 'Первая цифра 1, 2 или 3' 
    : 'нет';

const phoneResult = numberString.includes(phoneNumber) 
    ? 'Номер телефона найден в строке' 
    : 'Номер телефона не найден в строке';

let task4Result = `
<h3>Задача 4: Проверка строки</h3>
<p>Строка для проверки: ${numberString}</p>
<p>Результат проверки первой цифры: ${digitResult}</p>
<p>Результат поиска номера телефона: ${phoneResult}</p>
`;
displayResults('task4', task4Result);
