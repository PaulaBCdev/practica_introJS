const input = "string";

const inverseCount = (string) => {
    const strList = [...string].reverse();
    strInverse = strList.join("");
    return(`${strList.length} ${strInverse}`);
}

inverseCount(input); 
/* console.log(inverseCount(input)); */

const input2 = "variable";
inverseCount(input2);
/* console.log(inverseCount(input2)); */


const input3 = "pointer";
inverseCount(input3); 
/* console.log(inverseCount(input3)); */