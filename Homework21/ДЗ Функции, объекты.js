// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
  'one': 'number',
};

function resolve1(inputObject) {
 // body
  let res = {};
  for (let key in inputObject) {
    res[inputObject[key]]=key;
  }
  return res;
};

const result1 = resolve1(firstObject);
console.log("Result1", result1); // ожидаемый результат { 'number': 'one' }
console.log("FfirstObject", firstObject); // ожидаемый результат { 'one': 'number' }


// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
  'apple': 'fruit',
  'potato': 'vegetable',
  'strawberry': 'berry',
};

function resolve2(inputObject) {
 // body
  let res = {};
  for (let key in inputObject) {
    res[inputObject[key]]=key;
  }
  return res;
};

const result2 = resolve2(secondObject);
console.log("Result2", result2);
// ожидаемый результат: { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }

console.log("SecondObject", secondObject);
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }


// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math
function centuryFromYear (year) {
  const century = Math.ceil(year/100);
  return century;
}

const year = 1905;
const result3 = centuryFromYear(year);
console.log("Result3", result3); // 20

const year2 = 1700;
const result4 = centuryFromYear(year2);
console.log("Result4", result4); // 17.