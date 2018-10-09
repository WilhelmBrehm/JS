//FLATTENER
function flattener(arr){
  return arr.reduce((a,b) => a.concat(b));
}
//let brr = [[1,2,3],[4],[5,6],[7],[8,9,0]];
//console.log(flattener(brr));

//ABSTRACT_FOR
function abstractfor(value,tester,updater,body){
  while (tester(value)===true) {
    body();
    value = updater(value);
  }
}
var value = 0;
function tester(n){return (x) => x<n}
function updater(x){return x+1;}
function body(){console.log("toot")};
//abstractfor(value,tester(5),updater,body);

//EVERY 1
//function every(arr,test){
//  function nottest(x){return !test(x);}
//  if(arr.some(nottest)){return false;}
//  else{return true;}
//}
//let brr = [1,2,3,4,5,6,7,8,9];
//function test(a){return a > -1};
//console.log(everysome(brr,test));

//EVERY 2
function every(arr,test){
  let b = true;
  for (var i = 0; i < arr.length; i++) {
    b = b && test(arr[i]);
  }
  return b;
}

//let brr = [1,2,3,4,5,6,7,8,9];
//function test(a){return a > 1};
//console.log(every(brr,test));










let arr = [];
console.log(arr[0]==undefined);
