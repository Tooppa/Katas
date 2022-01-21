const shuffleCount = (size) => {
    const array = Array.from({length: size}, (_, i) => i + 1);
    let suffled = array;
    const halfSize = size / 2;
    let suffles = 0;

    const suffle = () => {
        let firstHalf = suffled.slice(0,halfSize);
        let secondHalf  = suffled.slice(halfSize);
        let temp = []
        for (i = 0; i < halfSize; i++) {
            temp.push(firstHalf[i])
            temp.push(secondHalf[i])
        }
        suffled = temp;
        suffles++;
    }

    while(true){
        suffle();
        if (suffled.toString() === array.toString())
            return suffles;
    }
}
console.log(shuffleCount(8));
console.log(shuffleCount(14));
console.log(shuffleCount(52));