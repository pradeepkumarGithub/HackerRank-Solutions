/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonants = "";

    for(let i = 0; i <s.length; i++) {
        if (vowels.indexOf(s[i]) !== -1) {
            console.log(s[i]);
        } else {
            consonants += s[i] + '\n';
        }
    }
    console.log(consonants);
}

