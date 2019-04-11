function run(){
const scanf = require("scanf"); // program team_hortons_factorial;


function factorial(x) {
  if (x > 1) return x * factorial(x - 1);else return 1;
}

var x, f;
process.stdout.write('input x = ');
x = scanf('%s');
f = factorial(x);
console.log(x + '! = ' + f);
v = scanf('%s');
}

module.exports = {run};