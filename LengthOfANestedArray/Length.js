const getLength = (arr) => {
    let length = 0;
    for (e of arr) 
        length += Array.isArray(e) ? getLength(e) : 1;
    return length;
}

console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, 4]]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
console.log(getLength([1, [2], 1, [2], 1]));