/*
  Title:
    Reverser

  Description:
   Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

    // Please do not use
    const forbidden = "
                    '
                    `
                    string
                    fixed
                    precision
                    .keys

  Kata Link:
    https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/train/javascript
  
*/

// Solution
function reverse(number) {
    let revNumber = 0;
    while (number > 0) {
      revNumber = (revNumber * 10) + (number % 10);
      number = Math.floor(number / 10);
    }
    return revNumber;
  }
     