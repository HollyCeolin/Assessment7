//SUM ZERO
let array = [1, 2, 3, -2]

let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)
// O(n) because it depends on the length of the array.

//HAS UNIQUE CHARACTERS

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
  hasUniqueChars("Monday")

  // O(n) because it depends on the length of the word.


//IS IT A PANAGRAM

alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}

console.log(isPangram("The quick brown fox jumps over the dog"));
console.log (isPangram("The quick brown fox jumps over the lazy dog!"))

//O(1) the alphabet is a constant and will not change what it is checking for.

//FIND LONGEST WORD


let words = ["hi", "hello"];
let longest = words.reduce(
    (a, b) => a.length >= b.length ? a : b
  );
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (longest < word.length) {
    longest = word.length;
  }
}
console.log(longest);

//O(n) depends on the length of the word


// EXTRA CREDIT

function hasUniqueChars(word) {
    let uniqueChars = new Set([]) //O(1)
    for (let i = 0; i < word.length; i++) { //O(n)
      uniqueChars.add(word[i]) //O(1)
    }
    return uniqueChars.size === word.length //O(n)
  }
