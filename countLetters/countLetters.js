var arg = process.argv[2]


function countLetters(str) {
  var str = str.split('');
  var letterCount = {};

  for (var char = 0; char < str.length; char++){
    var current = letterCount[str[char]];
    if (current == undefined) {
      current = 1;
    }
    else {
      current ++;
    }
    letterCount[str[char]] = current;
  }
return letterCount;
}
console.log(countLetters(arg));
