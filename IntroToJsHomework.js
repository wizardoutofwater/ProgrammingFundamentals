// Intro to Js Homework 

//Hello, You!
function hello(name){
    console.log(`Hello ${name}!`)
}

hello(`Mustache`)

//Hello, You! Part 2
function hello(name=`world`){
    console.log(`Hello ${name}!`)
}

hello(`Mustache`)
hello()

//Madlib
function madlib(name,subj){
    console.log(`${name}'s favorite subject in school is ${subj}.` )
}
madlib("Mike", "Art")

//Tip Calculator

function tipAmount (billAmt, servLevel){
    if (servLevel === `good`){
        console.log (billAmt*0.2);
    }else if (servLevel === `fair`){
        console.log (billAmt*0.15);
    }else if (servLevel === `bad`){
        console.log (billAmt*0.1);
    }
    
}
tipAmount(100, `good`)    

//Tip Calculator Part 2 

function totalAmount (billAmt, servLevel){
    if (servLevel === `good`){
        console.log(billAmt * 0.2 + billAmt)
    }else if (servLevel === `fair`){
        console.log(billAmt * 0.15 + billAmt)
    }else if (servLevel === `bad`){
        console.log(billAmt * 0.1 + billAmt)
    }
}

totalAmount(100, `good`)
totalAmount(40, `fair`)

//Tip Calculator part 3

function splitAmount (billAmt, servLevel, numGuests){
    if (servLevel === `good`){
        console.log(((billAmt * 0.2 + billAmt) / numGuests).toFixed(2));
    }else if (servLevel === `fair`){
        console.log(((billAmt * 0.15 + billAmt) / numGuests).toFixed(2));
    }else if (servLevel === `bad`){
        console.log(((billAmt * 0.1 + billAmt) / numGuests).toFixed(2));
    }

}
splitAmount(100, `good`, 5)
splitAmount(40, `fair`, 2)
splitAmount(87, `fair`, 3)