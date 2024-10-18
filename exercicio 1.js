const nota1 = prompt("Digite a primeira nota");

const nota2 = prompt("Digite a segunda nota");

const nota3 = prompt("Digite a terceira nota");

const n1 = nota1 , n2 = nota2 , n3 = nota3;

let soma = (n1+n2+n3);

let media = soma / 3;

console.log("nota 1 = " + nota1);

console.log("nota 2 = " + nota2);

console.log("nota 3 = " + nota3);

console.log("A Média desse aluno eh : " + soma);

if(media >= 60){

    console.log("Aprovado !!!");

}
else{

    console.log("Reprovado :<")

}
