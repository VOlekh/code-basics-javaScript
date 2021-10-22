// BEGIN (write your solution here)
let hasChar = (str, char) => {
  let i = 0;
while (i < str.length){
  if(str[i] === char) {
    return true;

  }
  i++
}

return false;
}

// END

export default hasChar;
//test
import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('Renly', 'R')).toBe(true);
  expect(f('Renly', 'r')).toBe(false);
  expect(f('Tommy', 'm')).toBe(true);
  expect(f('Tommy', 'd')).toBe(false);
  expect(f('Tommy', 'y')).toBe(true);
});

//task
// Exercise
// Implement the hasChar () function, which checks (case sensitive) if a string contains the specified letter. The function takes two parameters:

// Line
// Search letter
// Call example:

// hasChar ('Renly', 'R'); // true
// hasChar ('Renly', 'r'); // false
// hasChar ('Tommy', 'm'); // true
// hasChar ('Tommy', 'd'); // false
