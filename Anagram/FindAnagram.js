const hiddenAnagram = (base, str) => {
    base = base.toLowerCase().replace(/[^a-z]/g, '');
    str = str.toLowerCase().replace(/[^a-z]/g, '').split("").sort().join("")
    start = 0
    end = str.length
    while (end <= base.length) {
        hidden_slice = base.slice(start, end)
        if (hidden_slice.split("").sort().join("") === str) {
            console.log(hidden_slice);
            return;
        }
        else {
            start++
            end++
        }
    }
    console.log("noutfond");
}

hiddenAnagram("An old west action hero actor", "Clint Eastwood") //➞ "noldwestactio"
hiddenAnagram("Mr. Mojo Rising could be a song title", "Jim Morrison") //➞ "mrmojorisin"
hiddenAnagram("Banana? margaritas", "ANAGRAM") //➞ "anamarg"
hiddenAnagram("D e b90it->?$ (c)a r...d,,#~", "bad credit") //➞ "debitcard"
hiddenAnagram("Bright is the moon", "Bongo mirth") //➞ "noutfond"