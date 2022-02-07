const checkIfPrime = (n) => {
    for (let i = 2; i * i <= n; ++i)
        if (n % i == 0) return false;
    return true;
}
const findPrime = () => {
    var startTime = performance.now();
    let prime = 3;
    let i = 2;
    while (i < 10001) {
        do {
            prime += 2;
        } while (!checkIfPrime(prime));
        i++;
    }
    var endTime = performance.now();
    console.log('10001 Prime: ' + prime + ', Time: ' + (endTime - startTime) + ' ms');
}
findPrime();