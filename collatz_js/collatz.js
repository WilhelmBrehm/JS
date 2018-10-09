function collatz(n){
  let i = n.toString();
  while(n!=1){
    if(n%2==0){
      n=n/2;
    }else{
      n=n*3+1;
    }
    i = i +","+n.toString();
  }
  return i;
}


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

function range(start,end){
  let arr = [];
  for(start;start<=end;start++){
    arr.push(start);
  }
  return arr;
}

for (var i = 1; i < 10000000; i++) {
      collatzsteps(i);
}
console.log("done");
