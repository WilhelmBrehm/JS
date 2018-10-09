function collatz(n){
  let smaller = n-1;
  while(n>smaller){
    if(n%2==0){
      n=n/2;
    }else{
      n=n*3+1;
    }
  }
  return true;
}


let temp = true;

for (var i = 2; i <= 1000000000; i++) {
  temp =  temp && collatz(i);
}
console.log(temp);
