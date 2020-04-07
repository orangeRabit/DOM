// - створити функцію яка виводить масив
// const arr = [5, 6, 2, 3, 7];
// function f(array) {
//     console.log(array);
// }
// f(arr)

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function f2(num, min, max) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(Math.floor(Math.random() * (max - min) + min))
//     }
//
//     return arr
// }
//
// let arrRand = f2(10,10,50);
// f(arrRand);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function f3(a, b, c) {
//    let min;
//    if (a <= b && a <= c) min = a;
//    if (b <= a && b <= c) min = b;
//    if (c <= b && c <= a) min = c;
//
//     console.log(min);
//     return min
// }
// let minNum = f3(11,32,23);


// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function f3(a, b, c) {
//     let max;
//     if (a >= b && a >= c) max = a;
//     if (b >= a && b >= c) max = b;
//     if (c >= b && c >= a) max = c;
//
//     console.log(max);
//     return max
// }
// let maxNum = f3(11,32,23);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function f5() {
//     let min = Math.min.apply(null,arguments);
//     let max = Math.max.apply(null,arguments);
//     console.log(max);
//     return min;
// }
// f5(11,32,23,4,65,46,57,8,9,10)

function f3(a, b, c) {
    let min;
    if (a <= b && a <= c) min = a;
    if (b <= a && b <= c) min = b;
    if (c <= b && c <= a) min = c;

    console.log(min);
    return min
}
let min = f3(11,32,23);

// - створити функцію яка виводить масив
// const arra = [5, 6, 2, 3, 7];
// function f6(array) {
//     console.log(array);
// }
// f6(arra)

// - створити функцію яка повертає найбільше число з масиву
// function f7() {
//     let max = Math.max.apply(null,arguments);
//     return max;
// }
// - створити функцію яка повертає найменьше число з масиву
// function f8() {
//     let min = Math.min.apply(null,arguments);
//     return min;
// }

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let array = [1, 2, 3, 4, 5]
// function f9(arr) {
//     let joinArr = arr.join('');
//     console.log(joinArr);
//     return joinArr;
// }
// f9(array)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function f10() {
//     let num = 0;
//     for (const number of arguments) {
//         num += number;
//     }
//     console.log(num/arguments.length);
// }
//
// f10(1,2,3,4,5)

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// function f11(arrayObject) {
//     let count = 0;
//     for (const obj of arrayObject) {
//             count++;
//     }
//     return count
// }
//
// let number = f11(users);
// console.log(number);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// function f12(arrObj) {
//     let count = 0;
//     for (const user of users) {
//         for (const userKey in user) {
//             count++;
//         }
//     }
//     return count;
// }
// let number1 = f12(users);
// console.log(number1);

// - створити функцію яка скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// function f13(arr1, arr2) {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArr.push(arr1[i]+arr2[i]);
//
//     }
//     console.log(newArr);
// }
// f13([1,2,3,4], [2,3,4,5])


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"


	// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
	// Двожина масиву від 2 до 100
	// Приклад
	// [1,0,6,0,3] => [1,6,3,0,0]
	// [0,1,2,3,4] => [1,2,3,4,0]
	// [0,0,1,0] => [1,0,0,0]
// function f14(arr) {
//     let arrZero = [];
//     let arrNum = [];
//     for (const arrElement of arr) {
//         if (arrElement === 0) {
//             arrZero.push(0);
//         }else {
//             arrNum.push(arrElement);
//         }
//     }
//     return arrNum.concat(arrZero);
// }
// let NumZero = f14([1,0,6,0,3]);
// console.log(NumZero);
// let NumZero1 = f14([0,1,2,3,4]);
// console.log(NumZero1);
// let NumZero2 = f14([0,0,1,0]);
// console.log(NumZero2);



// Створити функцію яка :
	// - Додає в боді блок з текстом "Hello owu"
	// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
	// - приймає масив автомобілів (можна взяти з попередніх дз ),та індентифікатор елемнту в який потрібно додати список цих автомобілів.
	// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
	// - приймає масив автомобілів (можна взяти з попередніх дз ),та індентифікатор елемнту в який потрібно додати список цих автомобілів.
	// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
	// Для кожної властивості створити всередені блока автомоблія свій блок
	// (на основі минулого ДЗ)


	// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
	// та повертає масив цих з'єднаних об'єктів.
	// Приклад масивів:
	// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
	// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
	// Частковий приклад реультату:
	// ***- беремо завдання з правилами з укроку №3 :
	// Та робимо це функцією.При цьому правила отримувати через аргумент.
	// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
	// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
	// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
	// //todo add rules
	// let rules = [
	// {
	// title: 'Первое правило Бойцовского клуба.',
	// body: 'Никому не рассказывать о Бойцовском клубе.'
	// },
	// {
	// title: 'Второе правило Бойцовского клуба.',
	// body: 'Никогда никому не рассказывать о Бойцовском клубе.'
	// },
	// {
	// title: 'Третье правило Бойцовского клуба.',
	// body: 'В схватке участвуют только двое.'
	// },
	// {
	// title: 'Четвертое правило Бойцовского клуба.',
	// body: 'Не более одного поединка за один раз.'
	// },
	// {
	// title: 'Пятое правило Бойцовского клуба.',
	// body: 'Бойцы сражаются без обуви и голые по пояс.'
	// },
	// {
	// title: 'Шестое правило Бойцовского клуба.',
	// body: 'Поединок продолжается столько, сколько потребуется.'
	// },
	// {
	// title: 'Седьмое правило Бойцовского клуба.',
	// body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
	// },
	// {
	// title: 'Восьмое и последнее правило Бойцовского клуба.',
	// body: 'Новичок обязан принять бой.'
	// },
	// ];
