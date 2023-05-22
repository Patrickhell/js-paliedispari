//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma



let parola = prompt("Inserisci una parola :")
let parolaDivisa = parola.split("");
 parolaDivisa = parolaDivisa.reverse();
 let parolaInversa = parolaDivisa.join("");


if(parolaPalindroma (parola, parolaInversa)) {
    console.log("la parola è palindroma");
} else{
    console.log("la parola non è palindroma");
}
/**
 * 
 * @param parola: la parola inserita dall'utente 
 * @param parolaInversa : restitusce la porala suddivisa in lettere inserite in un array però, nel verso opposto
 * @returns : ritorna il risultato dopo aver controllato che la parola sia palindroma.
 */

function parolaPalindroma(parola, parolaInversa) {
    if(parola == parolaInversa ) {
        return true;
    }
    else {
        return false;
    }
}
