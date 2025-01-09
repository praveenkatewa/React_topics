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
function pattern(n){
  for(let i=1;i<n;i++){
    let row='';
    for(let j=1;j<=i;j++){
      row=row+j+'';
    }
    console.log(row)

  }
}
pattern(5)




