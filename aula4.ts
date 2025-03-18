let teclado = require(`prompt-sync`)();

let temp : number = parseInt(teclado (`Digite a temperatura a ser convertida: `));

let tempConvertida : number =  (9/5*(temp - 32));
console.log (`a temperatura convertida é ${tempConvertida}`)