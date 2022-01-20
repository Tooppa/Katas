const Split = (string, finalArray = []) => {
    let char;
    let splitted = true;
    for (let i = 0; i < string.length; i++) {
        if (char == string[i]) {
            finalArray.push(string.slice(0,i));
            Split(string.slice(i), finalArray);
            splitted = false;
            break;
        }
        char = string[i];
    }
    if (splitted)
        finalArray.push(string);
    return finalArray;
}

console.log(Split('really'));
console.log(Split('letter'));
console.log(Split('happy'));
console.log(Split('shall'));
console.log(Split('mississippi'));
console.log(Split('teststringssttoot'));