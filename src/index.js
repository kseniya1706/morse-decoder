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
    // write your solution here
    let decodedString = '';
    
    nextSymbol: for (let i = 0; i < expr.length; i += 10) {
        let morseSymbol = '';
        for (let j = i; j < i + 10; j += 2) {
                if (expr[j] == '0') {
                    morseSymbol += '';
                }
                else {
                    if (expr[j+1] == '0') {
                        morseSymbol += '.';
                    }
                    else {
                        if (expr[j+1] == '1') {
                            morseSymbol += '-';
                        }
                        else{
                        decodedString += ' '; 
                        continue nextSymbol;
                        }
                    }
                }
            }
            decodedString += MORSE_TABLE[morseSymbol];
        }
    return decodedString;
}

module.exports = {
    decode
}
