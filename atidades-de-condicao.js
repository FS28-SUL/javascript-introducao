// questão 1
// let idade = 17;
// if(idade >= 18){
//     console.log("Maior de idade");
// }else{
//     console.log("Menor de idade");
// }

// questão 2
// let numero = 12;

// if (!numero || typeof numero != "number") {
//     console.log("Digite um numero válido");
//     return;
// }

// if (numero > 0) {
//     console.log(`${numero} é positivo`);
// } else if (numero < 0) {
//     console.log(`${numero} é negativo`);
// } else {
//     console.log(`é zero`);
// }

// questão 3

// let numeroA = 2;
// let numeroB = 2;

// if(numeroA > numeroB){
//     console.log(`${numeroA} é maior que ${numeroB}`);
// }else if(numeroB > numeroA){
//     console.log(`${numeroB} é maior que ${numeroA}`);
// }else{
//     console.log(`${numeroB} é igual ${numeroA}`);
// }

// questão 4

// let numero = 1024;

// if(numero % 2 === 0 ){
//     console.log(`${numero} é par`);
// }else{
//     console.log(`${numero} é ímpar`);
// }

// questão 5

// let notaA = 3;
// let notaB = 3;
// let notaC = 3;
// let media = ((notaA + notaB + notaC) / 3).toFixed(1);

// if(media >= 7){
//     console.log(`Média: ${media}, Parabéns você foi aprovado!`);
// }else if(media >= 5){
//     console.log(`Média: ${media}, Você está de recuperação, estude mais!`);
// }else{
//     console.log(`Média: ${media}, Você foi reprovado!`);
// }

// questão 6

// let valor = 5439;
// let desconto = 20;

// if(valor > 100){
//     // console.log(`Você recebeu um desconto de 10%, total: R$ ${(valor - (valor * 0.1)).toFixed(2)}`);
//     console.log(`Você recebeu um desconto de 10%, total: R$ ${(valor - ((valor * desconto) / 100)).toFixed(2)}`);
// }else{
//     console.log(`Valor a pagar: R$ ${(valor).toFixed(2)}`);
// }

// questão 8

// let usuario = "admin";
// let senha = "1234";

// if(usuario === "admin" && senha === "1234"){
//     console.log("Acesso permitido");
// }else{
//     console.log("Acesso negado");
// }

// if(usuario === "admin"){
//     if(senha === "1234"){
//         console.log("Acesso permitido");
//     }
// }else{
//     console.log("Acesso negado");
// }

// questão 9

// let compra = 199;

// if(compra >= 200){
//     console.log(`Você obteve frete grátis em sua compra, total: R$ ${compra}`);
// }else{
//     console.log(`Total da compra + frete: R$ ${(compra + 20).toFixed(2)}.`);
// }

// questão 10

// let numero = 9.9999999999999;

// if( numero >= 10 && numero <= 50){
//     console.log(`O número ${numero} está entre 10 e 50`);
// }else{
//     console.log(`O número ${numero} não está entre 10 e 50`);
// }


// questão 1

// let dia = 3;

// switch (dia) {
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda");
//         break;
//     case 3:
//         console.log("Terça");
//         break;
//     default:
//         break;
// }

let semaforo = "azul";

switch (semaforo) {
    case "verde":
        console.log("Siga em frente");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "vermelho":
        console.log("Pare");
        break;
    default:
        console.log("Informe um valor válido: verde, amarelo, vermelho");
        break;
}