

function range(start,end){
  let arr = [];
  for(start;start<=end;start++){
    arr.push(start);
  }
  return arr;
}

function arraytolist(arr){
  let list = {rest: null};
  for(let i = arr.length; i >= 0; i--){
    list = {entry: arr[i],rest: list}
  }
  return list;
}

function listtoarray(list){
  let arr = [];
  while(list.rest != null){
      arr.push(list.entry);
      list = list.rest;
  }
  return arr;
}




console.log(listtoarray(arraytolist(range(2,8))));
