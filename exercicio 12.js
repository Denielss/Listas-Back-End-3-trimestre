console.log("Código do Produto   Preço unitário");
console.log("1001                R$ 5,32");
console.log("1324                R$ 6,45");
console.log("6548                R$ 2,37");
console.log("0987                R$ 5,32");
console.log("7623                R$ 6,45");
console.log("coloque apenas o codigo do produto.");

let IDproduto = prompt("oq vc comprou : ");

let QUANTproduto = prompt("quantos vc comprou : ");

IDproduto = parseInt(IDproduto);

QUANTproduto = parseFloat(QUANTproduto);

if(IDproduto == 1001){

    let Devendo = (QUANTproduto * 5.32);

    console.log("vc me deve : "+Devendo);


}if(IDproduto == 1324 ){

    let Devendo = (QUANTproduto * 6.45);

    console.log("vc me deve : "+Devendo);

    
}if(IDproduto == 6548){

    let Devendo = (QUANTproduto * 2.37);

    console.log("vc me deve : "+Devendo);

    
}if(IDproduto == 0987){

    let Devendo = (QUANTproduto * 5.32);

    console.log("vc me deve : "+Devendo);

    
}if(IDproduto == 7623){

    let Devendo = (QUANTproduto * 6.45);

    console.log("vc me deve : "+Devendo);

    
}