// function OTP() {


  
//   return Math.floor(1000 + Math.random() * 9000);
// }


// const otp = OTP();
// console.log(" OTP ", otp);



// const now = new Date();
// let month = now.getMonth();
// let year= now.getFullYear();
// console.log(year);
// console.log(month)

 
// console.log("time:", now);


// let a = 5;
// let b= 6;
// let c=0;
// a=c;
// b=a;
// c=b;
// console.log(a)
// console.log(b)








// a = a + b; 
// console.log(a)
// b = a - b; 
// console.log(b)
// a = a - b; 
// console.log(a)

// console.log("a =", a); 
// console.log("b =", b); 


// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let min=numbers[0];
// for(let i=0;i<numbers.length;i++){
//   if(numbers[i]<min){
//     min=numbers[i];
//   }
// }
// console.log(min);



// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let oddNumbers=[];
// let evenNumbers=[];

// for(let i=0;i<numbers.length;i++)
// {
//   if(numbers[i]%2==0){
//     evenNumbers.push(numbers[i])
    
//   }
//   else 
//   {
//     oddNumbers.push(numbers[i])
//   }
// }
// console.log(oddNumbers)
// console.log(evenNumbers)



let numbers=[1,2,3,4,50,6,7,8,9,10];
let largest=-Infinity;
let secondlargest=-Infinity;
for(i=0;i<numbers.length;i++){
  if(numbers[i]>largest){
    secondlargest=largest
    largest=numbers[i];
  }
  else if(numbers[i]>secondlargest &&numbers[i] !==largest){
    secondlargest=numbers[i]
  }
  
}
console.log(secondlargest)


let name ="praveen";
let reverse='';


for(let i=name.length-1;i>=0;i--){
  reverse =reverse+ name[i];

}
console.log(reverse)