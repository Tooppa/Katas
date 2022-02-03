const hiddenAnagram = (base, str) => {
    const formattedBase = base.toLowerCase().replace(/[^a-z]/g, '');
    const formattedStr = str.toLowerCase().replace(/[^a-z]/g, '');
    let foundChars = '';
    for (c of formattedBase) {
        const currentChar = c.toLowerCase();
        var strcount = formattedStr.split(currentChar).length - 1;
        var foundcount = foundChars.split(currentChar).length - 1;
        if (formattedStr.includes(currentChar) && strcount > foundcount) {
            foundChars += currentChar;
        }
    }
    console.log(foundChars)
}

hiddenAnagram("An old west action hero actor", "Clint Eastwood") //➞ "noldwestactio"
hiddenAnagram("Mr. Mojo Rising could be a song title", "Jim Morrison") //➞ "mrmojorisin"
hiddenAnagram("Banana? margaritas", "ANAGRAM") //➞ "anamarg"
hiddenAnagram("D e b90it->?$ (c)a r...d,,#~", "bad credit") //➞ "debitcard"
hiddenAnagram("Bright is the moon", "Bongo mirth") //➞ "noutfond"