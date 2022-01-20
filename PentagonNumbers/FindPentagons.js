const isPentagonal = (x) => {
    const r = Math.sqrt(1 + 24 * x);
    return r % 6 === 5;
};
const FindPentagons = () => {
    let storedPentagons = [];
    let i = 1;

    while (true) {
        const pentagonal = i * (3 * i - 1) / 2;
        for (p of storedPentagons) {
            const division = pentagonal - p;
            const sum = pentagonal + p;
            if (isPentagonal(division) && isPentagonal(sum)) {
                return (
                    pentagonal + " - " + p + " = " + division + " \n" + 
                    pentagonal + " + " + p + " = " + sum + " \n" + 
                    "D = " + Math.abs(pentagonal - p)
                    );
            }
        }
        storedPentagons.push(pentagonal);
        i++;
    }
};
console.log(FindPentagons());