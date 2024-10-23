console.log(" atenção !! n coloque numeros iguais");

let nm1 = prompt("Digite o primeiro numero : ");

let nm2 = prompt("Digite o segundo numero : ");

nm1 = parseInt(nm1);

nm2 = parseInt(nm2);

resulresto = nm1 % nm2;

if(nm1 > nm2){

    resulresto = nm1 % nm2;

if(resulresto <= 0){

    console.log(nm1 + " e " + nm2 + "são multiplos");
}
else{

    console.log(nm1 + " e " + nm2 + "não são multiplos");

}
}
if(nm1 < nm2){

    resulresto = nm2 % nm1;

if(resulresto <= 0){

    console.log(nm1 + " e " + nm2 + "são multiplos");
}
else{

    console.log(nm1 + " e " + nm2 + "não são multiplos");

}
}