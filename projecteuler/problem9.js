/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/
function does_satisfy(a,b,c){
  return (a*a+b*b==c*c);
}

var a = 1;
var b = 1;

//gehe runter (mit konst a) bis b = 1000-a
//wenn nichts gefunden a++
for (;a < 1000; a++){
  b = a+1;
  for(;b < 1000-a; b++){
    if(does_satisfy(a,b,1000-a-b)){console.log(a,b,1000-a-b);}
  }
}
