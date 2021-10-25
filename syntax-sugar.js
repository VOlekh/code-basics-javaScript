// BEGIN (write your solution here)
 let filterString = (str, symbol) => {
   let newStr = '';
    let i = 0;
    while(i < str.length){
      if (str[i] !== symbol) {
        newStr = `${newStr}${str[i]}`;
      }
      i = i + 1;
    }
   return newStr;
 }

// END

export default filterString;

//test
import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  const text = 'If I look back I am lost';
  expect(f(text, 'I')).toEqual('f  look back  am lost');
  expect(f('zz zorro', 'z')).toEqual(' orro');
});

//task
// JavaScript: Syntactic Sugar
// Such constructions index = index + 1 are used quite often in JavaScript, so the creators of the language added an abbreviated notation: index + = 1. Such abbreviations are usually called syntactic sugar, because they make the process of writing code a little easier and more pleasant by "sweetening" it: )

// There are shorthand forms for all arithmetic operations and for string concatenation:

// a = a + 1 → a + = 1
// a = a - 1 → a - = 1
// a = a * 2 → a * = 2
// a = a / 1 → a / = 1
// a = a + 'foo' → a + = 'foo'
// Exercise
// Implement a filterString () function that takes a string and a character as input and returns a newline in which the passed character has been removed at all positions.

// Call example:

// const str = 'If I look back I am lost';
// filterString (str, 'I'); // 'f look back am lost'
// filterString (str, 'o'); // 'If I lk back I am
