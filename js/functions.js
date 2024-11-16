/*Проверка длины строки*/
const checkStringLength = (string, maxLength) => string.length <= maxLength;

console.log(checkStringLength('Hello, world!', 10));

// Строка короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false

function isPalindrome(string) {
  const cleaned = string.replaceAll(' ', '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс')); // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
