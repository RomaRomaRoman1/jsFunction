function testFunction() {
    var base = 2;
    var exponent = 3;
    var resultPow = customPow(base, exponent);

    var start = 1;
    var end = 100;
    var resultRandom = generateRandomNumber(start, end);

    displayResult(resultPow, resultRandom);
}


function customPow(base, exponent) {
    let result = 1;  // Начальное значение результата равно 1.
    const positiveExponent = Math.abs(exponent);  // Берем абсолютное значение показателя степени.
    
    for (let i = 0; i < positiveExponent; i++) {  // Цикл повторяется positiveExponent раз.
        result *= base;  // Умножаем result на base на каждой итерации.
    }

    if (exponent < 0) {  // Если исходный показатель степени отрицательный,
        return 1 / result;  // возвращаем обратное значение результата.
    }

    return result;  // Возвращаем результат возведения в степень.
}

// Пример использования
console.log(customPow(2, 3));  // Output: 8
console.log(customPow(2, -3)); // Output: 0.125

function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

// Пример использования
console.log(generateRandomNumber(1, 100));