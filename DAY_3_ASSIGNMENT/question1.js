
//question1 solution
let msg=prompt('Hey LetsUpgarde');
console.log(msg);

//question2 solution
//Explain with examples the remaining methods of String and Array

let str="Hey,Javascript is a client side scripting langyage and it is been fun studying javascript.";

console.log(str);

console.log(str.charAt(2));
console.log(str.charCodeAt(2));

console.log(str.concat("- Harvey"));

let str2="Hey,Javascript is a client side scripting langyage and it is been fun studying javascript.";

str="It's a fun language , can build responsive webpages";
console.log(str.localeCompare(str2));   //returns 0 if same and 1 when diff

console.log(str.repeat(2));

str2=str.slice(2,5);
console.log(str2);

console.log(str.trim());


console.log(str.valueOf());
console.clear();

//arrays
let cars = ["Audi", "Volvo", "BMW","Lamborgini"];
console.log(cars.sort());

console.log(cars.toString());

console.log(cars.unshift("Honda"));



//question3 solution
let age=confirm("Are you above 18?");
if(age){
    console.log('Can Vote');    
}
else{
    console.log('Cannot Vote');
}

age=prompt('Enter your age');

if(age>18) {
console.log('Can Vote');    
}
else{
    console.log('Cannot Vote');
}