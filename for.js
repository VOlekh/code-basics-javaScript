// BEGIN (write your solution here)
let encrypt = (str) => {
let encrMessage = '';
  for (let i = 0; i < str.length; i += 2){
    let nextSymbol = str[i + 1] || '';
  encrMessage = `${encrMessage}${nextSymbol}${str[i]}`;
  }
  return encrMessage;
}


// END

export default encrypt;

//test
import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('attack')).toEqual('taatkc');
  expect(f('go!')).toEqual('og!');
});

//task
// Exercise
// Samwell discovered that his messages were being intercepted at Gemini Castle and read there. Because of this, their attacks are no longer sudden. After a little thought, he developed a program that would encrypt messages using the following algorithm. She would take the text and rearrange every two characters in it.

// encrypt ('move'); // 'omev'
// encrypt ('attack'); // 'taatkc'
// // If the number of characters is odd
// // then the last character stays in place
// encrypt ('forward!'); // 'og!'
// Implement the encrypt () function, take the original message as input and return the encrypted one.

// Think. Can this function decrypt an encrypted message?
