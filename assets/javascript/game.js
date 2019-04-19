var wins=0;

function f1() {
let words=["apple", "orange", "plum", "kiwi", "banana"];
var mystery= ["_"];
var choice= [ ];
var attempt=7;
const puzzle=words[Math.floor(Math.random()*words.length)];
var ind = puzzle.length;
for(i=0;i<ind-1;i++){
mystery.push("_");
}

document.querySelector(".myst strong").innerText=mystery.join(" ");
document.querySelector(".attempt strong").innerText=attempt;
document.querySelector(".wins strong").innerText=wins;
document.querySelector(".choice strong").innerText=choice;

document.onkeyup=function(event) {


letter=event.key;
choice.push(letter);
 //if (attempt>=0 && mystery.indexOf("_")!=-1) 
 {attempt=attempt-1;
document.querySelector(".attempt strong").innerText=attempt;
document.querySelector(".choice strong").innerText=choice;


//mystery.indexOf("_")!=-1

    for(let i=0;i<puzzle.length;i++)
    if(puzzle[i]==letter)
    {mystery[i]=letter;
        
       
    }
    document.querySelector(".myst strong").innerText=mystery.join(" ");
    if(mystery.indexOf("_")==-1) {
        console.log("You win");
        wins++;
        f1();
    }

    if(attempt==0) {
        console.log("You lose");
    
        f1();
    }

        
} 
//else 

//alert("Done!");



}

}