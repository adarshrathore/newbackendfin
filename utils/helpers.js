
const processData = (data) => {
    const numbers = [];
    const alphabets = [];
    let highestLowercase = null;

    data.forEach((item) => {
        if (!isNaN(item)) {
            // Check if item is a number
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            // Check if item is an alphabet
            alphabets.push(item);
            if (item === item.toLowerCase() && (!highestLowercase || item > highestLowercase)) {
                highestLowercase = item;
            }
        }
    });

    const isPrimeFound = numbers.some((num) => isPrime(parseInt(num, 10)));

    return { numbers, alphabets, highestLowercase, isPrimeFound };
};

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

module.exports = { processData };
