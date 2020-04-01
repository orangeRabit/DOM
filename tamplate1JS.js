// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName або document.getElementsByTagName :

// - отримує текст з параграфа з id "content"
// let cont = document.getElementById('content');
// console.log(cont);

// - отримує текст з блоку з id "rules"
// let rul = document.getElementById('rules');
// console.log(rul);

// - замініть текст параграфа з id 'content' на будь-який інший
// let content = document.getElementById('content');
// console.log(content.innerText = 'hello');

// // - замініть текст параграфа з id 'rules' на будь-який інший
// let rules = document.getElementById('rules');
// console.log(rules.innerText = 'world');

// - змініть кожному елементу колір фону на червоний
// let cont = document.getElementById('content');
// console.log(cont);
// cont.style.backgroundColor = 'red';
// let rul = document.getElementById('rules');
// console.log(rul);
// rul.style.backgroundColor = 'red';

// - змініть кожному елементу колір тексту на синій
// let content = document.getElementById('content');
// console.log(content.innerText = 'hello');
// content.style.color = 'blue'
// let rules = document.getElementById('rules');
// console.log(rules.innerText = 'world');
// rules.style.color = 'blue'

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let allRules = document.getElementById('rules').classList
// console.log(allRules);
// for (let i = 0; i < allRules.length; i++) {
//     console.log(allRules[i]);
// }

// - отримати всі елементи з класом fc_rules
// let allClass = document.getElementsByClassName('fc_rules')
// console.log(allClass);

// - поміняти колір тексту у всіх елементів fc_rules на червоний
let allClass = document.getElementsByClassName('fc_rules')
console.log(allClass);
allClass.style.color = 'red';