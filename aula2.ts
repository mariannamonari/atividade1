let teclado = require(`prompt-sync`)();

console.log(`-----------------`);
console.log(`- Calculo media -`);
console.log(`-----------------`)

let nome: string = teclado(`Digite o nome do aluno: `);
let n1: number = parseInt(teclado(`Digite a nota n1: `));
let n2: number = parseInt(teclado(`Digite a nota n2: `));

let media: number = (n1 + n2) /2
console.log(`O nome do aluno ${nome} e a media é ${media}`);
