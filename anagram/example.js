// Anagram = function Anagram(word) {
//   this.word = word;
// };

// Anagram.prototype = {
//   match: function(words) {
//     var matches = [];

//     for(var i = 0; i < words.length; i++) {
//       var currentWord = words[i];

//       if ( this.wordIsAnagramOf(this.word,currentWord) ) {
//         matches.push(currentWord);
//       }
//     }
//     return matches;
//   },
//   wordIsAnagramOf: function(first,second) {
//     var isMatch = false;

//     if (first.length == second.length) {
//       var firstLetters = first.split('').sort();
//       var secondLetters = second.split('').sort();

//       isMatch = true;

//       for (var j = 0; j < firstLetters.length; j++) {
//         if (firstLetters[j] != secondLetters[j]) {
//           isMatch = false;
//         }
//       }
//     }

//     return isMatch;
//   }
// };

// Anagram = function(word) {

//   this.canonical = canonicalize(word);

//   this.match = function(candidates) {
//     var matches = [];
//     for(var candidate, i=0; candidate = candidates[i]; i++) {
//       if (this.canonical == canonicalize(candidate))
//         matches.push(candidate);
//     }
//     return matches;
//   };

//   function canonicalize(word) {
//     return word.toLowerCase().split("").sort().join("");
//   };

// }

// console.log(new Anagram("something"));

Anagram = function(input){
  var word = sortChars(input),
      anagrams = [];

  this.match = function(options){
    for (var i = 0; i < options.length; i++){
      var comparison = sortChars(options[i]);

      if (word === comparison){
        anagrams.push(options[i]);
      }
    }
    return anagrams;
  }

  function sortChars(word) {
    return word.split("").sort().join("");
  }
}