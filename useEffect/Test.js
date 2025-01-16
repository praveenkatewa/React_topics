// 1)


// function numsum(n){
//   let sum=0;
//   for(let i=0;i<=n;i++){
//     sum=sum+i;
//   }
//   return sum;
// }
// console.log(numsum(5));

// 2)

// function counts(n){
//   let even=0;
//   for(let i=0;i<=n;i++){
//     if(i%2==0){
//       even++;
//     }
//     console.log(even)
//   }
//   return even;
// }
// console.log(counts(5))

// 3

// function arr(num){
//   let ar=[];
//   for(let i=1;i<=num.length;i++){
//     ar.push([i]*2)
//   }
//   return ar;
// }
// const num=[1,2,3,4,5];

// console.log(arr(num));


// 4)
// function reverse(str){
//   let reversed='';
//   for(let i=str.length-1;i>=0;i--){
//     reversed=reversed+str[i];

//   }
//   return reversed;
// }
// console.log(reverse("hello"));


// 5)
// function pattern(n){
//   for(let i=1;i<n;i++){
//     let row='';
//     for(let j=1;j<=i;j++){
//       row=row+j+'';
//     }
//     console.log(row)

//   }
// }
// pattern(5)


// 1. Sum of Numbers in a Range
// Question:
// Write a for loop to find the sum of all numbers between 1 and 100 (inclusive).

// let sum=0;
// for(let i=0;i<=100;i++){
//   sum=sum+i;
  
// }
// console.log(sum)



// 2. Even Numbers Only
// Question:
// Write a for loop that prints all even numbers between 0 and 20.

// let even=0;
// for(let i=0;i<=20;i++){
//   if(i%2==0){
//     console.log([i])
//   }
// }


// 3. Square of Each Element in an Array
// Question:
// Given the array const arr = [1, 2, 3, 4], write a for loop that creates a new array where each element is the square of the corresponding element from the original array.

//  arr=[1,2,3,4]
//  let arr2=[]
//  for(let i=0;i<arr.length;i++){
  
//   arr2.push(arr[i]*2)
//  }
//  console.log(arr2)




// 4. Find the Maximum Number
// Question:
// Write a for loop that finds the maximum number in the array const arr = [5, 12, 3, 8, 7].

// const arr=[5,12,3,8,7]
// // let maxnum=arr[0];
// // let maxnum=-Infinity;
// let maxnum=0;
// console.log(maxnum)
// for(let i=0;i<=arr.length;i++){
  
//   if(arr[i]>maxnum){
//     maxnum=arr[i]
//   }
// }
// console.log(maxnum)



// 5. Counting Vowels in a String
// Question:
// Write a for loop that counts the number of vowels (a, e, i, o, u) in a given string.


// const str=('praveen')
// const vowels='aeiou';
// let count=0;
// for(let i=0; i<str.length;i++){
//   if(vowels.includes(str[i].toLocaleLowerCase())){
//     count++;
//   }
  
// // console.log(count)
// }

// console.log(count)

// 6. Sum of Array Elements
// Question:
// Given the array const arr = [1, 2, 3, 4, 5], write a for loop that calculates the sum of the array elements.

// const arr=[1,2,3,4,5]
// let sum=0;
// for(let i=0;i<arr.length;i++){
//   sum=sum+arr[i]

// }
// console.log(sum)


// 7. Reverse an Array
// Question:
// Write a for loop to reverse an array. For example, given const arr = [1, 2, 3], it should return [3, 2, 1].
//  let arr=[1,2,3]
// let reverse=[]
// for(let i=arr.length-1;i>=0;i--){
//   // reverse=reverse+arr[i]
//   reverse.push(arr[i])

// }
// console.log(reverse)


// 8. Prime Numbers Between 1 and 50
// Question:
// Write a for loop to find all prime numbers between 1 and 50.

// for(let num=2;num<=50;num++){
//   let prime=true;
//   for(let i=2;i<num;i++){
//     if(num%i==0){
//       prime=false;
//       break;
//     }
//   }
//   if(prime){
//     console.log(num)
//   }
// }


// 9. Count Occurrences of a Character
// Question:
// Write a for loop that counts how many times the character a appears in the string const str = "javascript is awesome".

// const str='javascript is awesome'
// let count=0;
// for(let i=0;i<str.length;i++){
//   if(str[i]=='a'){
//     count++;
//   }
// }
// console.log(count)


const str='javascript is awesome';
let count=0;
for(let i=0;i<str.length;i++){
  if(str[i]!==' '){
    
    count++;

  }
  }
console.log(count)

// 10. Multiplying All Numbers in an Array
// Question:
// Given the array const arr = [2, 3, 4, 5], write a for loop to multiply all the numbers together and return the product.

// let arr=[2,3,4,5]
// let Product=1;
// for(let i=0;i<arr.length;i++){
//   Product=Product*arr[i]

// }
// console.log(Product)


const arr=[2,3,4,5]


function mutlti(arr){
  let product=1;
  for(let i=0;i<arr.length;i++){
    product*=arr[i];
  }
  return product;
}
console.log(mutlti(arr))


const arr = [2, 3, 4, 5];

function multiplyArray(arr) {
    return arr.reduce((product, num) => product * num, 1);
}

console.log(multiplyArray(arr)); 
