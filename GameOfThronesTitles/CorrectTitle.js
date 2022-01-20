
const correctTitle = (str) => {
    const lowerCase = ['and', 'the', 'of', 'in'];
    const toLowerAndSplit = (s) => s.toLowerCase().split(' ');
    const firstToUpper = (w) => w.charAt(0).toUpperCase() + w.slice(1);
    return toLowerAndSplit(str)
        .map(w => 
            lowerCase.includes(w) ? w : firstToUpper(w)
        ).join(' ');
}
//const correctTitle=s=>s.toLowerCase().split(' ').map(w=>['and','the','of','in'].includes(w)?w:w.charAt(0).toUpperCase()+w.slice(1)).join(' ');

console.log(correctTitle("jOn SnoW, kINg IN thE noRth"));
console.log(correctTitle("sansa stark, lady of winterfell."));
console.log(correctTitle("TYRION LANNISTER, HAND OF THE QUEEN."));