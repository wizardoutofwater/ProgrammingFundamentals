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

