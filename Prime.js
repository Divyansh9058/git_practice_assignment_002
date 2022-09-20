let num=47;
let factor=0;
for(let i=1;i<=num;i++){
  if(num%i==0){
    factor++;
  }
}
if(factor==2){
  console.log("it is prime");
}
else{
  console.log("Not a Prime");
}