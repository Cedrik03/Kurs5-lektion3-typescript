function functionOne(){
    const A = "amanda";
    const B = 20;
    const C = false;
    const D = [1, 2, 3, 4 ]
    const E = "cedrik"
    console.log( A, B, C, D, E)
        
}
function functionTwo(num1, num2) {
    console.log("Nummer 1:", num1, "Nummer 2:", num2);
    return num1 + num2;
}
function functionThree(){
    console.log("hej Carolina")
}
function functionFour(){
    return "Hello World"
}
function MainFunction(){
    console.log("funkion 1: ")
        functionOne();

    console.log("funktion 2: ")
    const sum = functionTwo(1, 6);
    console.log("Resultat: ",sum );

    console.log("funktion 3: ");
    functionThree();

    console.log("funktion 4: ");
    console.log(functionFour());
}



    MainFunction(); {

    }
    console.log("  ")


    const arrowfunctionOne = () => {
    const A = "bok";
    const B = 5;
    const C = true;
    const D = [1, 2, 3, 4, 5];
    const E = "hejh";
    console.log(A, B, C, D, E);
};

const arrowfunctionTwo = (num1, num2) => num1 + num2;

const arrowfunctionThree = () => console.log("Hej på dig!");

const arrowfunctionFour = () => "Hello, World!";

const mainarrowFunction = () => {
    console.log("Funktion 1:");
    arrowfunctionOne(); 

    console.log("Funktion 2:");
    const sum = arrowfunctionTwo(8, 4);
    console.log("Summan är:", sum);

    console.log("Funktion 3:");
    arrowfunctionThree();

    console.log("Funktion 4:");
    console.log(arrowfunctionFour()); 
};


mainarrowFunction();


function delayFunction() {
    setTimeout(() => {
    console.log("Function was delayed")
     }, 2000)
    }

    const delayedMessage = (millisecondsDelay, message) =>{
        setTimeout(() => {
            console.log(message);
        
    }, millisecondsDelay);
};
delayedMessage(3000, "detta visas efter 3 sekunder!");

const smartTimeout = (delayInMilliseconds, message, repeatCount = 1, callback) => {

if (delayInMilliseconds <= 0) {
        console.log("Fel: Fördröjningen måste vara större än 0.");
        return;
    }

    
    if (!Number.isInteger(repeatCount) || repeatCount < 1) {
        repeatCount = 1;
    }

   
    for (let i = 0; i < repeatCount; i++) {
        setTimeout(() => {
            console.log(message);

            
            if (i === repeatCount - 1) {
                if (typeof callback === "function") {
                    callback(); 
                } else {
                    console.log("Alla meddelanden har skickats!");
                }
            }
        }, delayInMilliseconds * (i + 1)); 
    }
};


smartTimeout(2000, "Hej, detta är ett meddelande!", 3, () => {
    console.log("Slut på loggningen!");
});
