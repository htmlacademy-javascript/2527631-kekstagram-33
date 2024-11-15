const checkStringLenght = (textToValidate, maxLenght) => textToValidate.lenght <= maxLenght;

console.log(checkStringLenght('fffffff', 18));


function isPalindrom (string){
  const cleaned = string.replaceAll(' ','').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Строка является палиндромом
console.log(isPalindrom('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(isPalindrom('ДовОд')); // true
// Это не палиндром
console.log(isPalindrom('Кекс')); // false
console.log(isPalindrom('Лёша на полке клопа нашёл')); //true
