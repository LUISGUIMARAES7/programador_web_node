import fs from 'fs';
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"));
const novoDado = {id:4, nome:"Livro legal"};
fs.writeFileSync("Livros.json", JSON.stringify([... dadosAtuais,novoDado]));
console.log(JSON.parse(fs.readFileSync("livros.json")));