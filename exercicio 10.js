let saldo = prompt("Somos do banco e precisamos saber quanto vc tem de saldo na sua conta para fazermos um cartao for you , digite aqui : ");

saldo = parseInt(saldo);

if(saldo <=200){

    let credito = 0;

    console.log("seu saldo eh de : R$"+saldo);
    console.log("seu limite de creto eh : R$ "+credito);
    
}
if(saldo >=201 && saldo <=400){
    
    let credito = saldo * 0.20;

    console.log("seu saldo eh de : R$"+saldo);
    console.log("seu limite de creto eh : R$ "+credito);
    
}
if(saldo >=401 && saldo <=600){

    let credito = saldo * 0.30;

    console.log("seu saldo eh de : R$"+saldo);
    console.log("seu limite de creto eh : R$ "+credito);
      
}
if(saldo >=601){

    let credito = saldo * 0.40;

    console.log("seu saldo eh de : R$"+saldo);
    console.log("seu limite de creto eh : R$ "+credito);
      
}
    