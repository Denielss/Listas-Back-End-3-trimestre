console.log("qual seu cargo na empresa ? ");

console.log("Código     Cargo");
console.log("101        Gerente");
console.log("102        Engenheiro");
console.log("103        Técnico");
console.log("104        Outro");

let IDcargo = prompt("Digite o codigo : ");

let IDsalarioA = prompt("Digite seu salario : ");

IDcargo = parseInt(IDcargo);

IDsalarioA = parseFloat(IDsalarioA);

if(IDcargo == 101){

    let SalarioN = (IDsalarioA+(Diferença));

    let Diferença = (IDsalarioA * 0.10);

    console.log("seu salario antgo era : "+IDsalarioA);
    console.log("seu novo salario eh : "+SalarioN);
    console.log("com uma diferença de : "+Diferença);

}if(IDcargo == 102){

    let SalarioN = (IDsalarioA+(Diferença));

    let Diferença = (IDsalarioA * 0.20);

    console.log("seu salario antgo era : "+IDsalarioA);
    console.log("seu novo salario eh : "+SalarioN);
    console.log("com uma diferença de : "+Diferença);

}if(IDcargo == 103){

    let SalarioN = (IDsalarioA+(Diferença));

    let Diferença = (IDsalarioA * 0.30);

    console.log("seu salario antgo era : "+IDsalarioA);
    console.log("seu novo salario eh : "+SalarioN);
    console.log("com uma diferença de : "+Diferença);

}if(IDcargo == 104){

    let SalarioN = (IDsalarioA+(Diferença));

    let Diferença = (IDsalarioA * 0.40);

    console.log("seu salario antgo era : "+IDsalarioA);
    console.log("seu novo salario eh : "+SalarioN);
    console.log("com uma diferença de : "+Diferença);

}