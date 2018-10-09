
function collatzsteps(n){
  let i = 0;
  while(n!=1){
    if(n%3==0){
      n=n/3;
    }else if(n%2==0){
      n=n/2;
    }else{
      n=n*n;
    }
    i = i+1;
    if(i>1000000) return false;
  }
  return i;
}

for (let i = 1; i < 1000; i++) {
      console.log(collatzsteps(i));
}

















//
