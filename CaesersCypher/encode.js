const caesarCipher = (str, rotation) => {
    let encoded = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const newMethodName = (c, chars) => {
        if (chars.includes(c)) {
            let newIndex;
            if (chars.indexOf(c) + rotation < chars.length)
                newIndex = chars.indexOf(c) + rotation;
            else
                newIndex = chars.indexOf(c) + rotation - chars.length;
            encoded += chars[newIndex];
        }
    };
    str.split('').forEach((c, index) => {
        newMethodName(c, alphabet)
        newMethodName(c, alphabet.toUpperCase())
        if (encoded.length <= index)
            encoded += c;
    });
    console.log(encoded)
}

caesarCipher("middle-Outz", 2)
//"okffng-Qwvb"
caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
//"Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
caesarCipher("A friend in need is a friend indeed", 20)
//"U zlcyhx ch hyyx cm u zlcyhx chxyyx"