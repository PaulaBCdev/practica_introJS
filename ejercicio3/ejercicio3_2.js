const input = 10;

const separator = (number) => {
    const numString = number.toString();
    
    const numList = [];
    for (const num of numString) {
        numList.push(num)
    };
    const separatedNumbers = numList.join("-");

    return separatedNumbers
}

separator(input); // "1-0"
console.log(separator(input));


const secondInput = 1;
separator(secondInput); // "1"
console.log(separator(secondInput));


const thirdInput = 11234;
separator(thirdInput); // "1-1-2-3-4"
console.log(separator(thirdInput));