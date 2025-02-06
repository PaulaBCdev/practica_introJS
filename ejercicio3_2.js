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

separator(input); 
/* console.log(separator(input)); */


const secondInput = 1;
separator(secondInput);
/* console.log(separator(secondInput)); */


const thirdInput = 11234;
separator(thirdInput); 
/* console.log(separator(thirdInput)); */