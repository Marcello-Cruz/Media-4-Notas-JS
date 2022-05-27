alert ("Digite apenas números entre Zero(0) e Dez(10)!!!");

const notaUm = Number(prompt("Nota 1"));
const notaDois = Number(prompt("Nota 2"));
const notaTres = Number(prompt("Nota 3"));
const notaQuatro = Number(prompt("Nota 4"));

if (Object.is(notaUm, NaN) 
 || Object.is(notaDois, NaN)
 || Object.is(notaTres, NaN) 
 || Object.is(notaQuatro, NaN)){
    alert("Digite apenas números!");
}else if(notaUm < 0 || notaUm > 10 
      || notaDois < 0 || notaDois > 10 
      || notaTres < 0 || notaTres > 10 
      || notaQuatro < 0 || notaQuatro > 10 ){
    alert("Digite números somente entre 0 e 10");
}else{
    ///calculo
    const media = Number((notaUm + notaDois + notaTres + notaQuatro)/4);
    const msgMedia = `Você ficou com média ${media}.`; 
    let resultado;
    if (media < 5){
        resultado = `${msgMedia} Resultado: Reprovado`;
    }else if (media < 6){
        resultado = `${msgMedia} Resultado: Em recuperação`;
    }else{
        resultado = `${msgMedia} Resultado: Aprovado`;
    }
    alert(resultado);
}