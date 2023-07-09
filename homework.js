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
const favMovies = ['Jaws', 'The Fellowship of the Ring', 
'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 
'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 
'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 
'Harry Potter', 'Imitation of Life', 'Snatch', ];

// 1.
favMovies.sort();
console.table(favMovies)
// The sort() menthod put the items in favMovies in alphabetical order
// It wasn't permanently altered
console.log('============================================================================')
// 2.
favMovies.pop();
// 3.
favMovies.push('Guardians of the Galaxy')
// 4.
favMovies.reverse();
// 5.
favMovies.shift();
// 6.
let add = favMovies.unshift()
console.log(add)
// The amount of elements in the array is returned
// 7.
let change = favMovies.indexOf('Django Unchained')
favMovies[change] = 'Avatar'
// The array was not permanently altered
// 8.
let half = Math.ceil(favMovies.length / 2)
const second = favMovies.slice(half)
// 9.
console.table(second)
// The list that was printed to the console was derived from the the main list
// 10.
console.table(favMovies)
// 11.
let findThis = favMovies.indexOf('Fast and Furious')
console.log(findThis)
// You get a -1 if the value you are searching for is not found
// 12.
// No becasue you dont want to overwrite the array thus losing access to all the elements within
//////////////////////////////
Where is Waldo
//////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// 1.
whereIsWaldo.splice(1,1)
console.table(whereIsWaldo)
// 2.
whereIsWaldo[1][2] = 'No One'
console.table(whereIsWaldo)
// 3.
console.log(whereIsWaldo[2][1][1])
//////////////////////////////
 Excited Kitten
//////////////////////////////
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        let rand = Math.floor(Math.random() * 3)   
        if(rand === 0){
            console.log('...human...why you taking pictures of me?...')
        }else if(rand === 1){
            console.log('...the catnip made me do it...')
        }else if(rand === 2){
            console.log('...why does the red dot always get away...')
        }
    }else{
        console.log('Love me, pet me! HSSSSSS!')
    }
}
////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,16,15,13,16,15,17,19,11,12,
    14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort()
// console.log(nums)
let middle 
middle =  Math.floor((nums.length - 1) / 2)
console.log(nums[middle])