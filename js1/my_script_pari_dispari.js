//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


const array = []
let userNumber  = parseInt(prompt("user 1 Choose a Even number o a Odd number between 1 and 5 "));
while(!(( userNumber >= 1 ) && ( userNumber <= 5))) {
    userNumber = parseInt(prompt("user 1 Choose a Even number o a Odd number between 1 and 5 "))
}
console.log(userNumber);
  const firstArray = array.push(userNumber);
  console.log(array);
    

function generaterandomNumber (minumNumber, maximumNumber) {
            const randomNumber  = Math.floor ((Math.random()*5) + 1);
                return randomNumber;
            }
            const secondArray = array.push(generaterandomNumber (1, 5));

       
        console.log(array);

        let sum = 0;
        for (let x = 0 ; x < array.length ; x++) {
            sum += array[x];
        }
        console.log(sum);

        if (isEvensum (sum)) {
            console.log (" IS even sum");
        } else {
            console.log ("Is odd sum")
        }

    function isEvensum(sum) {
        if (sum % 2 == 0) {
            return true;
        } else{
            return false;
        }
    }
    let randomValue = array[1];
    console.log(randomValue);

    if( userNumber > randomValue) {
        console.log (" Good User you win")
    } else if  ( userNumber < randomValue){
         console.log("Computer you win");
    } else {
        console.log(" you played the same number");
    }
    



            

       

           


        
        
        
    
        




    





