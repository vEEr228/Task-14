//1 Sum of first n numbers
let num1=10;
let sum=0;
for(let i=1 ; i<=num1 ; i++) {
sum += i;
console.log(`The sum of numbers is:${sum}`);
}




//2 Table of n
const num2=11;
const n=10;
console.log(`The table of ${num2} is:\n`);
let result;
for (let i=1 ; i<=n ; i++) {
  result = num2 * i;
  console.log(`${i} * ${num2} = ${result}`); 
}



//3 Prime Number
let num3 = 27;
let isPrime=true;
console.log(`Number: ${num3}`);

if(num3<=1) {
  isPrime=false;
}
else{
  for(i=2 ; i<=num3**(1/2);i++) {
    if(num3 % i==0) {
      isPrime=false;
      break;
    }
  }
if(isPrime) {
  console.log("Is it a prime number? Yes");
  }else{
    console.log("Is it a prime number? No")
  }
}


//4 Printing all factors
let num4=100;
for(let i = 1; i<=num4**(1/2); i++){
  if(num4%i!=0) {
    continue;
  }
  else{
    console.log("\n",i);
  }
}




let num5= 284;
console.log(`Number:${num5}`);

let sumOfDigits= 0;
let armstrong= 0;
let OriginalNum = num5;
while(num5>0) {
    sumOfDigits = sumOfDigits + num5%10 ;
    armstrong = armstrong + (num5%10)**3;
    num5 = Math.floor(num5/10);
    
}
console.log(`The sum of digits is:${sumOfDigits}`);

if(armstrong = num5) {
  console.log("It is an Armstrong number? Yes" );
}
else{
  console.log("It is not an Armstrong number? No");
}