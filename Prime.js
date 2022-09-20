let n=47;
let factor=1;
for(let i=1;i<=n;i++){
  if(n%i==0){
    factor++;
  }
}
if(factor==5){
  console.log("it is prime");
}
else{
  console.log("Not a Prime");
}