var greetings = "Hello, how are you";

function reverseString(text){
    var reverse = "";
    for (var letter of text){
        console.log(letter);
        reverse = letter + reverse;
    }
}

var reversed = reverseString(greetings);
console.log(reversed);