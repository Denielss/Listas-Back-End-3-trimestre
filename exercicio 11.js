console.log("esses sao os metodos de tirar a media . Escolha pelo numero dele !!!");
console.log("1 -aritmética");
console.log("2 -ponderada (3,3,4)");
console.log("3 -harmônica");

let media = prompt("qual tipo de metodo vc ira preferir para tirar a media deste aluno : ");

let nota1 = prompt("Digite a primeira nota : ");

let nota2 = prompt("Digite a primeira nota : ");

let nota3 = prompt("Digite a primeira nota : ");

media = parseInt(media);

nota1 = parseInt(nota1);

nota2 = parseInt(nota2);

nota3 = parseInt(nota3);

if(media == 1){

    let soma = (nota1 + nota2 + nota3);
    
    let aritmética = (soma / 3);

    console.log("a media aritmética desse aluno eh : "+ aritmética);
    
}
if(media == 2){

    let ponderada = ((nota1*3)+(nota2*3)+(nota3*4)/10);

    console.log("a media ponderada desse aluno eh : "+ ponderada);

}
if(media == 3){

    let harmônica = (3/(1/nota1)+(1/nota2)+(1/nota3));

    console.log("a media harmônica desse aluno eh : "+ harmônica);

}