function min(a,b){
  if(a>b){
    return b;
  }else{
    return a;
  }
}

function even(a){
  while(a>1){
    a -= 2;
  }
  switch (a) {
    case 0:
      return "even";
      break;
    case 1:
      return "odd";
    default:
      return(even(-a));
  }
}

function countchar(s,c){
  let j = 0
  let end = s.length;
  for(let i=0;i<end;i++){
    if(s[i]==c)j++;
  }
  return(j);
}
