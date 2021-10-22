// BEGIN (write your solution here)
let makeItFunny = (str, n) => {
  let result = '';
  let i = 0;
  while (i < str.length){
    if ((i + 1)%n === 0 ){
      result += str[i].toUpperCase();
    }
    else
    {
      result += str[i];
    }
    i = i + 1;
  }

return result;
}
// // END
// export default makeItFunny;


// BEGIN
// const makeItFunny = (str, n) => {
//   let i = 0;
//   let result = '';
//   while (i < str.length) {
//     const current = str[i];
//     if ((i + 1) % n === 0) {
//       result = `${result}${current.toUpperCase()}`;
//     } else {
//       result = `${result}${current}`;
//     }
//     i += 1;
//   }

//test
// import { test, expect } from 'hexlet-basics/tests';

// test((f) => {
//   const text = 'I never look back';
//   expect(f(text, 3)).toEqual('I NevEr LooK bAck');
//   expect(f('hello', 2)).toEqual('hElLo');
// });

// //task
// Exercise
// Write a makeItFunny () function that takes a string as input and returns a copy of it, with every nth element uppercase. n - set at the entrance to the function.

// To determine each nth element, you need the remainder of the division%. Think about how you can use it.

// Call example:

// const text = 'I never look back';
// // Every third element
// makeItFunny (text, 3); // 'I NevEr LooK bAck'

//   return result;
// };
// END
export default makeItFunny;
