const input1 = [
    "Download",
    "videos",
    "capture",
    "mp4"
];

const transform = (list) => {
    let listToString = list.join("/");
    let reverseListToString = [...listToString].reverse().join("");
    reverseListToString = reverseListToString.replace("/", ".");
    const newListToString = [...reverseListToString].reverse().join("");

    return newListToString
};

transform(input1);
//console.log(transform(input1));


const input2 = [
    "CodingCame",
    "python",
    "py"
];

transform(input2);
//console.log(transform(input2));


const input3 = [
    "programming",
    "languages",
    "easy",
    "beginner",
    "useful",
    "pythonstuff",
    "py"
];

transform(input3);
//console.log(transform(input3));