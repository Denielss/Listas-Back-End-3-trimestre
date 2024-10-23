let altura = prompt("Diga-me a sua altura : ");

let genero = prompt("vc nasceu com xebiu ou malaquias ? , se nasceu com xebiu digite 1 , e se nasceu com malaquias digite 2 : ");

genero = parseInt(genero);

altura =parseFloat(altura);

if(genero == 2){

    let Ideal = (72.7*altura)-58;

    console.log("o peso Ideal para a sua altura seria : "+Ideal + " kilos.");

}
if(genero == 1){

    let Ideal = (62.1*altura)-44.7;

    console.log("o peso Ideal para a sua altura seria : "+Ideal + " kilos.");
}