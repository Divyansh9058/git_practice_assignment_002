let num=47;
let count=0;
for(let i=1;i<=num;i++){
  if(n%i==0){
    count++;
  }
}
if(count==2){
  console.log("it is prime");
}
else{
  console.log("Not a Prime");
}