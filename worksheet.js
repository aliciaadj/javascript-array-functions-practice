const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];



//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
const massGreater100 = characters.filter(characters => {
    return characters.mass > 100
})

console.log(massGreater100);

//2. Get characters with height less than 200
const heightGreater200 = characters.filter(characters => {
    return characters.height < 200
})

console.log(heightGreater200);
document.getElementById("body").innerHTML = massGreater100;
//3. Get all male characters
const male = characters.filter(characters => {
    return characters.gender === "male"
})

console.log(male);
//4. Get all female characters
const female = characters.filter(characters => {
    return characters.gender === "female"
})

console.log(female);
//***SORT***
//1. Sort by mass
const mass = characters.sort((a, b) => {
 return a.mass - b.mass
}) 

console.log(mass);
//2. Sort by height
const height = characters.sort((a, b) => {
    return a.height - b.height
   }) 
   
   console.log(height);
//3. Sort by name
const byname = characters.sort((a, b) => {
    if(a.name < b.name) return -1;
    return 1;
   }) 
   

//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
