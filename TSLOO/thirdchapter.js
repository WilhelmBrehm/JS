
function range(start,end){
  let arr = [];
  for(start;start<=end;start++){
    arr.push(start);
  }
  return arr;
}
//console.log(range(1,10));
function sum(numbers){
  let result = 0;
  for(let i = 0; i< numbers.length; i++){
    result += numbers[i];
  }
  return(result);
}
//console.log(sum(range(1,10)));
function reversearray(arr){
  let brr = [];
  for(let i = arr.length -1; i >= 0; i--){
    brr.push(arr.pop());
  }
  return brr;
}

function reversearrayinplace(arr){
  for(let i = 0; i < arr.length; i++){
    arr.push(arr.shift());
  }
}

/*var a = range(2,11);
reversearrayinplace(a);
console.log(a);
console.log(reversearray(a));*/

let journal = [];
function addEntry(events, squirrel) {
   journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts","beer"], true);
console.log(journal[1][squirrels]);
let JOURNAL = journal;
//squirrel.journal[1] = true;


let anObject = {left: 1,right: 2};
let anotherObject = {left: 1, right: 2, x:null };

function deepEqual(obj,obk){
  if(obj == null) return;
  if(Object.keys(obj)==Object.keys(obk)){
    for(let entry of Object.keys(obj)){
      if (obk[entry] != obj[entry]) return false;
    }
    for(let entry of Object.keys(obk)){
      if (obk[entry] != obj[entry]) return false;
    }
  }else{return false;}
  return true;
}

console.log(deepEqual(anObject,anotherObject));
