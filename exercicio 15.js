let n1 = prompt("Digite o primeiro numero : ");

let n2 = prompt("Digite o segundo numero : ");

let n3 = prompt("Digite o terceiro numero : ");

n1 = parseInt(n1);

n2 = parseInt(n2);

n3 = parseInt(n3);

if(n1 <= 0){

    console.log("se a > b + c não formam triângulo algum, se a é o maior");

}else{

    if(n2 <=0 ){

        console.log("se a > b + c não formam triângulo algum, se a é o maior");


    }else{

        if(n3 <= 0){

            console.log("se a > b + c não formam triângulo algum, se a é o maior");

        }else{

            let SP = ((n1 + n2 + n3)/2);

            let A = Math.sqrt(SP*(SP-n1)*(SP-n2)*(SP-n3));

            console.log(" a area do triangulo eh "+A+" cm2");

        }

    }

}