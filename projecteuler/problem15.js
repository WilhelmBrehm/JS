function binomial_coefficent(n,k){
  let Nenner = 1;
  for(let i = 1; i <= n-k; i++){
    Nenner = Nenner * i;
  }
  let Zaehler = 1;
  for(let i = k+1; i <= n; i++){
    Zaehler = Zaehler *i;
  }
  return Zaehler / Nenner;
}


console.log(binomial_coefficent(40,20));
