function solve (text, charToChange, targetText) {
    let newString = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '_') {
        newString += charToChange;
        } else {
        newString += text[i];
        }
        
    }
    console.log(newString === targetText ? 'Matched' : 'Not Matched' );
    // condition ? if-true : else 
}
solve ('Str_ng', 'I',

'Strong');