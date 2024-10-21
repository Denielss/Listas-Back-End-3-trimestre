let codigoA = prompt("Digite o codigo do aluno : ");

let nota1 = prompt("Digite a primeira nota : ");

let nota2 = prompt("Digite a segunda nota : ");

let nota3 = prompt("Digite a terceira nota : ");

nota1 = parseInt(nota1)

nota2 = parseInt(nota2)

nota3 = parseInt(nota3)

let soma = (nota1+nota2+nota3);

let media = soma / 3;

console.log("COD Aluno : " + codigoA);

console.log("nota 1 = " + nota1);

console.log("nota 2 = " + nota2);

console.log("nota 3 = " + nota3);

console.log("A Média desse aluno eh : " + media);

if(media >= 50){

    console.log("Aprovado !!!");

}
else{

    console.log("Reprovado :<")

}