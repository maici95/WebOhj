



/*
    Tee sovellus, joka kysyy syötettävän sanan (merkkijono).
    Sovellus testaa onko sana palindromi ts. sana on sama toisinpäin.
    Esim. sana saippuakauppias on palindromi.
    Luo ratkaisu siten että et käytä valmiita funktioita vaan teet oman algoritmin.

    Muuta edellinen ratkaisu funktioksi joka palauttaa boolean arvon true, mikäli funktion parametrina oleva sana on palindromi (jos ei, niin palautetaan false).

    Kutsu funktiota.
*/


function isPalindrome(str) {
    let result = true;
    const length = str.length;

    let i = 0;
    let j = length - 1;

    while (i < length) {
        if (str[i] !== str[j]) {
            result = false;
            break;
        }

        i++;
        j--;
    }

    return result;
}

// Test cases
const tests = [
    { word: 'asddsa', isPal: true },
    { word: 'qweee', isPal: false },
    { word: 'qazwsx', isPal: false },
    { word: 'qazzaq', isPal: true },
    { word: 'qazzzaq', isPal: true },
    { word: 'werrew', isPal: true },
    { word: 'pokop', isPal: true },
    { word: 'saippuakauppias', isPal: true },
    { word: '123', isPal: false },
    { word: '121', isPal: true },
    { word: '1221', isPal: true },
];

function main() {
    // Test few words
    tests.forEach((test, index) => {
        console.log(test.word, isPalindrome(test.word), test.isPal);
    });
}

main();
