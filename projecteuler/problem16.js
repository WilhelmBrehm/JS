function sum_of_digits(number){
  let result = 0;
  let string = number.toString();
  for(var i = 0; i < string.length; i++){
    result = result + Number(string.charAt(i));
  }
  return result;
}

function analog_string_addition(s1,s2){
  let uebertrag = 0;
  let i = 0;
  let solution_string = "";
  let new_digit;
  while (uebertrag != 0 || (s1.length != 0 || s2.length != 0)) {
    uebertrag = uebertrag + Number(s1.slice(-1)) + Number(s2.slice(-1)); //für "" ist Number slice 0
    s1 = s1.slice(0,-1);
    s2 = s2.slice(0,-1);
    new_digit = (uebertrag % 10).toString();
    solution_string = new_digit.concat(solution_string);
    uebertrag = (uebertrag - uebertrag % 10)/10;
  }
  return solution_string;
}

let two_powers = "2"

for (var i = 1; i < 1000; i++) {
  two_powers = analog_string_addition(two_powers,two_powers);
}

console.log(two_powers);
console.log(sum_of_digits(two_powers));




//
