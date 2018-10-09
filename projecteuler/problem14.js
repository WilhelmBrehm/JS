function collatzsteps(n){
  let i = 0;
  while(n!=1){
    if(n%2==0){
      n=n/2;
    }else{
      n=n*3+1;
    }
    i = i+1;
  }
  return i;
}

let maxsteps = 0;
let maxnum = 1;
let collatz_i = 0;

for (var i = 1; i <= 1000000; i++) {
  collatz_i = collatzsteps(i);
  if(collatz_i >= maxsteps){maxnum = i;maxsteps = collatz_i;}
}
console.log(maxnum, maxsteps);
