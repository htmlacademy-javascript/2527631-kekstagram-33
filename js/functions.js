const checkStringLenght = (textToValidate, maxLenght) => textToValidate.lenght <= maxLenght;

checkStringLenght('fffffff', 18);


function isPalindrom (string){
  const cleaned = string.replaceAll(' ','').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Строка является палиндромом
isPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrom('ДовОд'); // true
// Это не палиндром
isPalindrom('Кекс'); // false
isPalindrom('Лёша на полке клопа нашёл'); //true
