let n1 = prompt("Digite o primeiro numero : ");

let n2 = prompt("Digite o segundo numero : ");

let n3 = prompt("Digite o terceiro numero : ");

n1 = parseInt(n1);

n2 = parseInt(n2);

n3 = parseInt(n3);

console.log("seus numeros sao : "+n1 +", "+n2 +" e "+n3);

if(n1 > n2){

    if(n1 > n3){
        console.log("o maior numero eh : "+n1);
    }
}
if(n2 > n3){

    if(n2 > n1){
        console.log("o maior numero eh : "+n2);
    }
}
if(n3 > n1){

    if(n3 > n2){
        console.log("o maior numero eh : "+n3);
    }
}