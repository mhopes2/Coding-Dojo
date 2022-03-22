for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

var string = "platypus";
// string[0] = p
//string[1] = l

console.log(string[0]);

for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
}

string[0] = "b";


var string = "askingforhelp"

function helpFinder(string) {
    for (var i = 0; i<string.length; i++) {
        if (string[i] == "h" || string[i] == "H") {
            return true
        }
    }
    return false
}
console.log(helpFinder("help"))
console.log(helpFinder("Help"))
console.log(helpFinder("bird"))


// return whether the string contains the word "help" or not
function helpFinder(string) {
    for (var i = 0; i<string.length; i++) {
        if (string[i] == "h" || string[i] == "H") {
            if(string[i+1] == "e" || string[i+1] == "E"){
                if(string[i+2] == "l" || string[i+2] == "L"){
                    if(string[i+3] == "p" || string[i+3] == "P"){
                        return true
                    }
                }
            }
        }
    }
    return false
}
console.log(helpFinder("help"))
console.log(helpFinder("Help"))
console.log(helpFinder("bird"))