const NotaUm = Number (prompt("Nota 1"));
const NotaDois = Number (prompt("Nota 2"));
const NotaTres = Number (prompt("Nota 3"));
const NotaQuatro = Number (prompt("Nota 4"));

if (Object.is(NotaUm, NaN))  
Object.is(NotaDois, NaN) || 
Object.is(NotaTres, NaN) ||
Object.is(NotaQuatro, NaN) 
else if ( NotaUm < 0 || NotaUm > 10 ||    
NotaDois < 0 || NotaDois > 10 ||
NotaTres < 0 || NotaTres > 10 ||
NotaQuatro < 0 || NotaQuatro > 10) {
}
//validar notas
alert ("Digite apenas números entre Zero(0) e Dez(10)!!!");
//calculo
const media = (NotaUm + NotaDois + NotaTres + NotaQuatro) / 4;