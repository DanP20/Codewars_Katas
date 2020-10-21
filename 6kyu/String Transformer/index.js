/*
  Title:
   String Transformer

  Description:
    Given a string, return a new string that has transformed based on the input:

    Change case of every character, ie. lower case to upper case, upper case to lower case.
    Reverse the order of words from the input.
    Note: You will have to handle multiple spaces, and leading/trailing spaces.

    For example:

    "Example Input" ==> "iNPUT eXAMPLE"
    You may assume the input only contain English alphabet and spaces.


  Kata Link:
    https://www.codewars.com/kata/5878520d52628a092f0002d0
  
*/

// Solution
function stringTransformer(str) {
    let words = str.split("");
      for(let i = 0; i < words.length; i++){
        if (words[i].toLowerCase() === words[i])
        {
          words[i] = words[i].toUpperCase();
        } else {
          words[i] = words[i].toLowerCase();
        }
      }
    return words.join("").split(" ").reverse().join(" ");
  }