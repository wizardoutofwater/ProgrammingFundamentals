// Creating actor objects + array 

const actor1 = {
    firstName: `Tom`,
    lastName: `Jones`,
    age: 85,
    yearlyEarnings: 3000000,
}
const actor2 = {
    firstName: `Bill`,
    lastName: `Smith`,
    age: 42,
    yearlyEarnings: 65000
}
const actor3 = {
    firstName: `Fred`,
    lastName: `Thomas`,
    age: 26,
    yearlyEarnings: 422000,
}
var arrayOfActors = [actor1, actor2, actor3]

//Creating a function to print First + Last name of actors older than 30
function oldActors (arrayOfActors){
    if(arrayOfActors[0].age > 30){
        console.log(arrayOfActors[0].firstName + " " +  arrayOfActors[0].lastName)
    }if(arrayOfActors[1].age > 30){
        console.log(arrayOfActors[1].firstName + " " +  arrayOfActors[1].lastName)
    }if(arrayOfActors[2].age > 30){
        console.log(arrayOfActors[2].firstName + " " +  arrayOfActors[2].lastName)
   // }else 
     //   console.log(`everybody is young!`)
}


oldActors (arrayOfActors)