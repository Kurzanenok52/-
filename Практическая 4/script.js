// 1. Функция проверки палиндрома
function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^а-яa-z0-9]/g, '');
    let result = cleanStr === cleanStr.split('').reverse().join('');
    document.getElementById('palindrome').innerHTML = 
        `Строка: "${str}"<br>
         Это палиндром? ${result ? 'Да' : 'Нет'}`;
    return result;
}

// 2. Функция работы с массивом
function replaceNegatives(arr) {
    let result = arr.map(num => num < 0 ? num * num : num);
    document.getElementById('array').innerHTML = 
        `Исходный массив: [${arr}]<br>
         Результат: [${result}]`;
    return result;
}

// 3. Класс для работы с именем пользователя
class UserGreeting {
    constructor(userName = 'Вася') {
        this.userName = userName;
    }
    
    showMessage() {
        let message = 'Привет, ' + this.userName;
        document.getElementById('greeting').textContent = message;
    }
}

// 4. Класс для переворачивания имени
class NameReverser {
    constructor(name) {
        this.name = name;
    }
    
    getReversedName() {
        let reversed = this.name.split('').reverse().join('');
        document.getElementById('reversed-name').innerHTML = 
            `Имя: ${this.name}<br>
             Перевернутое имя: ${reversed}`;
        return reversed;
    }
}

// Выполнение всех заданий
window.onload = function() {
    // Проверка палиндрома
    isPalindrome('А роза упала на лапу Азора');

    // Работа с массивом
    let numbers = [-4, 5, -6, 8, -9, 1, 2, -3, 7, -10, 11];
    replaceNegatives(numbers);

    // Приветствие
    const greeting = new UserGreeting('Вася');
    greeting.showMessage();

    // Переворачивание имени
    const reverser = new NameReverser('Анна');
    reverser.getReversedName();
}; 