//Question:1 Write a script to log "Hello, World!" to the console.

console.log("Hello World");

//Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.

function temperatue(Degree: number) {
  if (Degree < 20) {
    console.log("It is cold here outside");
  } else if (Degree > 20) {
    console.log("Whether is hot outside");
  } else console.log("Whether Nice outside");
}
temperatue(20);

//Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.

let totalApples = 10;
let applesGivenAway = 3;
let applesLeft = totalApples - applesGivenAway;

console.log(`You have ${applesLeft} apples left.`);

//Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.

let first_Nameis:string = 'Abdullah'
let second_Nameis:string = 'Samdani'
console.log(`${first_Nameis} ${second_Nameis}`);


//Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".

let a:number=5
let b:number=3
function checkNumber(){
if (a>b){
  console.log('Yes');
  
}
if (b>a){
  console.log('no');
  
}

}
checkNumber()



export{}
