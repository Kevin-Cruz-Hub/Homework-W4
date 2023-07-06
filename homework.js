////////////////////////////////
// Easy Going
////////////////////////////////
for(let i = 1; i <= 20; i++){
    console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////
for(let i = 0; i <= 200; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
for(let i = 0; i <= 200; i+=2){
    console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }else if(i % 3 === 0){
        console.log('Fizz');
    }else if(i % 5 === 0){
        console.log('Buzz');
    }else{
        console.log(i)
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// 1.
console.log(plantee[2]+=1)
// 2.
wolfy[3] = 'Gotham City'
console.table(wolfy)
// 3.
dart.push('Hawkins');
console.table(dart)
// 4.
wolfy.splice(0,1,'Gameboy');
console.table(wolfy)


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const Turtles = ['Donatello','Leonardo','Raphael','Michaelangelo']
for(let t of Turtles){
    console.log(t.toUpperCase())
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////