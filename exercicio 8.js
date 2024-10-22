console.log("!! por favor faça seu pedido ultilizando os codigos do produtos !!");
console.log("Especificação   Código  Preço");
console.log("Cachorro quente  100     1,20");
console.log("Bauru simples    101     1,30");
console.log("Bauru com ovo    102     1,50");
console.log("Hambúrger        103     1,20");
console.log("Cheeseburguer    104     1,30");
console.log("Refrigerante     105     1,00");

let CachorroQuente = 1.20;

let BauruSimples = 1.30;

let BauruComOvo = 1.50;

let Hambúrger = 1.20;

let Cheeseburguer = 1.30;

let Refrigerante = 1.00;

let pedido1 = prompt("qual seu primeiro pedido ? : ");

pedido1 = parseInt(pedido1);

let quantidadeP1 = prompt("quantos vai querer ? : ");

quantidadeP1 = parseInt(quantidadeP1);

if(pedido1 == 100){

    console.log("vc pediu "+quantidadeP1+ " cachorros quentes ");
    console.log("vc me deve : R$ "+(CachorroQuente * quantidadeP1)+ " reais");

}
if(pedido1 == 101){

    console.log("vc pediu "+quantidadeP1+ " Baurus Simples");
    console.log("vc me deve : R$ "+(BauruSimples * quantidadeP1)+ " reais")
    
}
if(pedido1 == 102){

    console.log("vc pediu "+quantidadeP1+ " Bauru Com Ovo ");
    console.log("vc me deve : R$ "+(BauruComOvo * quantidadeP1)+ " reais")
    
}
if(pedido1 == 103){

    console.log("vc pediu "+quantidadeP1+ " Hambúrgeres ");
    console.log("vc me deve : R$ "+(Hambúrger * quantidadeP1)+ " reais")
    
}
if(pedido1 == 104){

    console.log("vc pediu "+quantidadeP1+ " Cheeseburgueres ");
    console.log("vc me deve : R$ "+(Cheeseburguer * quantidadeP1)+ " reais")
    
}
if(pedido1 == 105){

    console.log("vc pediu "+quantidadeP1+ " Refrigerantes ");
    console.log("vc me deve : R$ "+(Refrigerante * quantidadeP1)+ " reais")
    
}