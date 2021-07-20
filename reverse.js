const args = process.argv;

const reverse = function(data) {
  let reversed = "";
  for (let i = 2; i < data.length; i++) {
    
    for (let k = data[i].length - 1; k >= 0; k--) {
      reversed += data[i][k];
    } if (i < data.length - 1) {
      reversed += "\n";
    }
  }
  return reversed;
};

console.log(reverse(args));

