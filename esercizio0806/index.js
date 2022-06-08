function helloWorld(){
    console.log("Hello World")};
helloWorld()

function frutta(limoni, mele){
    let frutta = "succo con "+ limoni +" limoni e "+ mele+" mele. ";
    return frutta;
};
console.log(frutta(10,7));
console.log(frutta(4,));

function anni(a){
    var anni = 2050 - a;
    return anni;

}
console.log(anni(1995));

Anni=(a) => 2050 - a;
console.log(anni(1995)); 




let pensione = (eta1, eta2, nome) => console.log(`${nome} va in pensione tra ${eta2 - eta1} anni`)


var fetteTorta = 10;

function check(){
    let fettePrese =document.getElementById("fette").value;
    if ((fetteTorta - fettePrese) >= 0){
        document(`Hai preso ${fettePrese} fette di torta`)
    } else{
        console.log(`Hai mangiato troppe fette di torta,ci sono solo ${fettePrese} fette di torta!`)
    }
    

  }
