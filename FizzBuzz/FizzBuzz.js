const fizzBuzz = (n) => {
    for (let i = 1; i < n; i++) {
        const f = i % 3 ? '' : 'fizz';
        const b = i % 5 ? '' : 'buzz';
        console.log(f + b || i);
    }
}

fizzBuzz(56)