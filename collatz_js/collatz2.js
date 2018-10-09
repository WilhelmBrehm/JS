function range(start,end){
  let arr = [];
  for(start;start<=end;start++){
    arr.push(start);
  }
  return arr;
}

function fill(n,a){
  let brr = [];
  for(let i = 0;i < n;i++){
    brr.push(a);
  }
  return brr;
}

function collatzray(end){

  let arr = range(1,end);
  let brr = fill(end,Infinity);
  let max = arr.length;
  let i = 0;
  let n = 0;
  brr[0] = 0;

  for(let index = 0; index<max; index++ ){
    i = 0;
    n = index+1;
    while(n!=1){
      if(n%2==0){
        n=n/2;
      }else{
        n=n*3+1;
      }

      i = i+1;
      if(n<max){
        if(brr[n] != Infinity){
          brr[index] =  i + brr[n-1];
          n = 1;
        }else {
          brr[index] =  i;
        }
      }
    }
  }
  console.log("done")
  return brr;
}

console.log(Math.max(collatzray(1000000)));
