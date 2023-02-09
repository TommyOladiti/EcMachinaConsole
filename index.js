const prompt = require('prompt-sync')();

let command = "";
let input = "";
let option1 = [];
let choice1 = ["rock","paper","scissors"];
let choice2 = ["rock","paper","scissors"];

// while (command != "QUIT"){
//     input = prompt('What is your command? :')

//     command = input.toUpperCase();

//     if (command == "GANE" ){
//         input = prompt('What is your choice? :')
//         option1.push(input) 
//         console.log(option1)
//     }

// }
if (choice1[1] == "paper"){
    if (choice2[0] == "rock"){
        return "paper wins";
    } else {
        if(choice2[2]){
            return "scissors wins"
        }
    }

}

//paper rock    scissors
//scissors rock    paper  
