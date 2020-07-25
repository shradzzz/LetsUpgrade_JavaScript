let num = +prompt('Enter a positive Number');

let arr = [];

let temp = 0;
do{
    arr.push(temp);
    temp++;
}
while(arr.length != num+1);

console.log(arr);


let oddarr = arr.filter(el=>
    el%2!=0
)

console.log(oddarr);



let oddSqr = arr.filter(el=>el%2!=0).map(el=>el**2);
console.log('oddSqr: ', oddSqr);
