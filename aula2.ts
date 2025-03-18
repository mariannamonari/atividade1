let teclado = require(`prompt-sync`)();

let n1: number = parseInt(teclado (`Digite o número a ser calculado: `));
let n2: number = parseInt(teclado (`Digite o número a ser calculado: `));
let n3: number = parseInt(teclado (`Digite o número a ser calculado: `));
let n4: number = parseInt(teclado (`Digite o número a ser calculado: `));
let n5: number = parseInt(teclado (`Digite o número a ser calculado: `));
let n6: number = parseInt(teclado (`Digite o número a ser calculado: `));
let n7: number = parseInt(teclado (`Digite o número a ser calculado: `));
let n8: number = parseInt(teclado (`Digite o número a ser calculado: `));
let n9: number = parseInt(teclado (`Digite o número a ser calculado: `));
let n10: number = parseInt(teclado (`Digite o número a ser calculado: `));

let media: number = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / 10;
console.log(`O valor calculado é ${media}`);