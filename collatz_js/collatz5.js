function CollatzTypeSequence(n,f){
  let marked_numbers = new Set();
  let i = n.toString();
  let counter = 0;
  while(!marked_numbers.has(n)){
    marked_numbers.add(n);
    n = f(n);
    i = i +","+n.toString();
    if(counter>1000){return false;}
    counter++
  }
  return i;
}

function f(n){
  if(n % 2 == 0){
    n = n/2;
  }else{
    n = -3*n + 1 ;
  }
  return n;
}

for (var i = 0; i < 1000; i++) {
  console.log(CollatzTypeSequence(i,f));
}
