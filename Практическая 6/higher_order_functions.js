// Задание 1: Использование map() для увеличения элементов массива
console.log('Задание 1:');
const numbers = [5, 10, 15, 20]; // Исходный массив

// Увеличиваем каждый элемент на 10
const increasedByTen = numbers.map(num => num + 10);
console.log('Увеличено на 10:', increasedByTen);

// Увеличиваем каждый элемент в три раза
const multipliedByThree = numbers.map(num => num * 3);
console.log('Умножено на 3:', multipliedByThree);

// Задание 2: Вычисление возраста из года рождения
console.log('\nЗадание 2:');
const birthYears = [1990, 1995, 2000, 2005];
const currentYear = 2024;

const ages = birthYears.map(year => currentYear - year);
console.log('Возраст людей:', ages);

// Задание 3: Фильтрация администраторов сайта
console.log('\nЗадание 3:');
const users = [
    { name: 'Анна', isAdmin: true, canEdit: true },
    { name: 'Иван', isAdmin: false, canEdit: false },
    { name: 'Мария', isAdmin: true, canEdit: true },
    { name: 'Петр', isAdmin: false, canEdit: true }
];

// Находим всех администраторов, у которых есть право редактирования
const admins = users.filter(user => user.isAdmin && user.canEdit);
const adminNames = admins.map(admin => admin.name);
console.log('Администраторы с правом редактирования:', adminNames);

// Задание 4: Вычисление среднего балла студентов
console.log('\nЗадание 4:');
const grades = [85, 90, 78, 92, 88];

const sum = grades.reduce((acc, curr) => acc + curr, 0);
const average = sum / grades.length;
console.log('Средний балл студентов:', average);

// Задание 5: Создание собственной функции высшего порядка
console.log('\nЗадание 5:');
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));
    }
    return newArray;
}

// Функция проверки длины строки
const checkLength = mapForEach(strArray, function(item) {
    return item.length <= 3 ? 0 : 1;
});

console.log('Результат проверки длины строк:', checkLength);
