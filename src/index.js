const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10))
    }

    arr = arr.map(el => el.slice(el.indexOf(1)));

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === '*') {
            arr[i] = ' ';

        } else {
            let temp = ''
            for (let j = 0; j < arr[i].length; j += 2) {
                let letter = arr[i].slice(j, j + 2);
                (letter === '10') ? temp = temp.concat('.'): temp = temp.concat('-')
            }
            arr[i] = temp;
        }

    }


    arr = arr.map(el => (el === ' ')? el = ' ': el = MORSE_TABLE[el]);


    return arr.join('');}

module.exports = {
    decode
}