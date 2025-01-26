const input = "string";

const inverseCount = (string) => {
    const strList = [...string].reverse();
    strInverse = strList.join("");
    return(`${strList.length} ${strInverse}`);
}

inverseCount(input); // "6 gnirts"
console.log(inverseCount(input));

const input2 = "variable";
inverseCount(input2); // "8 elbairav"
console.log(inverseCount(input2));


const input3 = "pointer";
inverseCount(input3); // "7 retniop"
console.log(inverseCount(input3));