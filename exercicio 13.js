console.log("Código do Produto   Preço unitário");

console.log("'ABCD'                R$ 5,30");
console.log("'XYPK'                R$ 6,00");
console.log("'KLMP'                R$ 3,20");
console.log("'QRST'                R$ 2,50");

console.log("coloque apenas o codigo do produto.");

let IDproduto = prompt("oq vc comprou : ");

let QUANTproduto = prompt("quantos vc comprou : ");

QUANTproduto = parseFloat(QUANTproduto);

if(IDproduto == "ABCD"){

    let Devendo = (QUANTproduto * 5.30);

    console.log("vc me deve : "+ Devendo);
    
}if(IDproduto == "XYPK"){

    let Devendo = (QUANTproduto * 6.00);

    console.log("vc me deve : "+ Devendo);
    
}if(IDproduto == "KLMP"){

    let Devendo = (QUANTproduto * 3.20);

    console.log("vc me deve : "+ Devendo);
    
}if(IDproduto == "QRST"){

    let Devendo = (QUANTproduto * 2.5);

    console.log("vc me deve : "+ Devendo);
    
}if(IDproduto != "ABCD"){

    if(IDproduto != "XYPK"){

        if(IDproduto != "KLMP"){

            if(IDproduto != "QRST"){

                console.log("CÓDIGO N ENCONTRADO ERRRRRRRRRROOOOOOOOOOOOO!!!!!!!!!!!!!! ");

            }

        }

    }

}
