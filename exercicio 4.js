let idade = prompt("Digite sua idade : ");

idade = parseInt(idade);

if(idade >=8){

    if(idade >=11){

        if(idade >=14){

            if(idade >=18){

                console.log("Vc eh Adulto")

            }else{

                console.log("Vc eh Juvenil B")

            }
        
        }else{

            console.log("Vc eh juvenil A")

        }
    
    }else{

        console.log("Vc eh infantil B")

    }

}else{

    console.log("Vc eh infantil A")

}
