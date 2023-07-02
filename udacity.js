//  here are ES6 javascript  review

// destructing
const arr = ["yvan", "elie", "jean", "msa"];

[y,e,j,m]= arr

// console.log(y,e,j,m);

// for object

const character = {
    name: "yvan",
    home:"kigali",
    love:"single",
    age:20
}
const{name,home,love,age}=character

// console.log(name, home,love,);


// Object Literal

//iteration

for(let i= 1; i<8; i++){
  // console.log(i );
}
//for ....of loop 

const digits=[0,1,2,3,4,5,6,7,8,9];

for(const digit of digits){
 
  // console.log(digit)
  }

// TIP: It’s good practice to use plural names for objects that are 
// collections of values. 
// That way, when you loop over the collection, you can use the singular
//  version of the name when referencing individual values in the collection. 
//  For example, for (const button of buttons) {...}.


const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for(const day of days){
  const upperCase = day.charAt(0).toUpperCase() + day.slice(1);//day.slice(1): The slice() method is called on the day string, starting from index 1. 
  // console.log(upperCase);
}

// spread operator: remove dots that divide number in an arrays.

const primes = [1,2,3,4,5,7,9,11,13,17,21];
const otherPrime =[55,57,61]

const merges = primes.concat(otherPrime)

// console.log(...merges)

function sum(...numbers){
  let total =0;

  for(const number of numbers){
    total +=number
  }
  return total
}
// console.log(sum(12,12,12));

const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name){
  return name.toLocaleUpperCase();
})
// console.log(...upperizedNames);

// arrow function

const upperizedName = ['Farrin', 'Kagure', 'Asser'].map(name => name.toLocaleUpperCase())

// console.log(...upperizedName)

// Default function parameters

function greet(name="yvan",greeting="welcome"){
    return `${name} ${greeting}`
}
// console.log(greet("peter", "howrd"));

function generateArr([width= 5, height=5] = []){
   return `generate a ${width} X ${height} grid`
}
console.log(generateArr())


const letterFrequency = (phrase) => {
  console.log(phrase)

  let frequency = {}

  for (const letter of phrase){
    console.log(letter);
    if(letter in frequency){
      frequency[letter]++
    }
    else{
      frequency[letter]=1
    }
  }
  return frequency;
}
console.log(letterFrequency("yoo i glad you hate me, conglaturation "))

// function that count repeative of numbers
const countWordRepeat =(words)=>{
  // create an abject which will keep words
  let countWords={}

 arrayOfWord= words.split(" ");
  for(const word of arrayOfWord){
    if(word in countWords){
      countWords[word]++
    }
    else{
      countWords[word]=1
    }
  }
  return countWords
}
console.log(countWordRepeat("i i hate you you you"))

const wordFrequency = (words)=>{
  const array = words.split(" ");
  return letterFrequency(array)
}
console.log(wordFrequency("I remember you as well as a"))

//  function that arranges the value in arrays
function solution(nums){
  if(!nums || nums.length===0){
    return []
  }
  return nums.sort((a,b)=> a-b);
}
console.log(solution([]))