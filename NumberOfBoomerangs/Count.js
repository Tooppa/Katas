const countBoomerangs = (numbers) => {
    let arr = [];
    let boomerangs = 0;
    for (n of numbers) {
        if (arr.length === 3) arr.shift();
        arr.push(n);
        if (arr[0] == arr[2] && arr[1] != arr[2]) boomerangs++;
    }
    return boomerangs;
}


console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));