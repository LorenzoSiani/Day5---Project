

//Premetto che ho svolto il compito solamente utilizzando Javascript. 
//Tutto l'argomento a livello teorico mi è piuttosto chiaro, ma quando dovrei implementarlo in VSC trovo parecchie difficoltà/errori.
//Ho impiegato un po di tempo nonostante abbia utilizzato solo questo linguaggio però credo di aver compreso qual'erano le consegne.
//Confido nella vostra clemenza :))  ed io mi impegnerò in questo fine settimana a buttare la testa sulla tastiera e comprendere a pieno l'argomento.
// Grazie per l'attenzione ;) 


"use strict";
class Smartphone {
    constructor(creditoResiduo, numeroTelefono, costoAlMinuto = 0.20
    ) {
        this.numeroTelefono = numeroTelefono;
        this.costoAlMinuto = costoAlMinuto;
        this.creditoResiduo = creditoResiduo;
        this.registroChiamate = [{ id: "0", durata: 1, data: new Date("2023-07-20") }];
    }
    
    getNumeroChiamate() {
        return this.registroChiamate.length;
    }


    getCreditoResiduo() {
        return this.creditoResiduo;
    }


    getNumeroTelefono() {
        return this.numeroTelefono;
    }


    getCostoAlMinuto() {
        return this.costoAlMinuto;
    }


    getRegistroChiamate() {
        return this.registroChiamate;
    }
   

    setCostoMinuto(nuovaTariffa) {
        this.costoAlMinuto = nuovaTariffa;
    }
    

    ricarica(euro) {
        this.creditoResiduo += euro;
    }
    chiamata(min) {
        
        //calcolo del costoChiamata
        let costoChiamata = this.costoAlMinuto * min;
        
        //controllo se ho credito
        if (costoChiamata > this.creditoResiduo)
            console.log(`Non c'è abbastanza credito per effettuare la chiamata`);
        else {
            this.creditoResiduo -= costoChiamata;
            
            //aggiungo chiamata al registro di chiamate
            this.registroChiamate.push({
                id: this.registroChiamate.length.toString(),
                durata: min,
                data: new Date()
            });
            console.log(`Chiamata effettuata, sono stati scalati ${costoChiamata}€`);
        }
    }


    azzeraChiamate() {
        this.registroChiamate = [];
    }
    filtraChiamatePerDataOra(data) {
        
        return this.getRegistroChiamate().filter(chiamata => chiamata.data.toDateString() == data.toDateString());
    }
}
//Cellulare 1
const iOS = new Smartphone(50, "3278485654");
console.log("iOS:");

console.log(`Costo al minuto: ${iOS.getCostoAlMinuto()}     -     Credito residuo: ${iOS.getCreditoResiduo()}`);

iOS.chiamata(5);

console.log(`Costo al minuto: ${iOS.getCostoAlMinuto()}     -     Credito residuo: ${iOS.getCreditoResiduo()}`);

//prima chiamata di 5 minuti
iOS.setCostoMinuto(1);
iOS.chiamata(5);
console.log(`Costo al minuto: ${iOS.getCostoAlMinuto()}     -     Credito residuo: ${iOS.getCreditoResiduo()}`);

//ricarico il credito
iOS.ricarica(4);
console.log(`Credito residuo: ${iOS.getCreditoResiduo()}`);


console.log(`Numero di chiamate: ${iOS.getNumeroChiamate()}`);
console.log(iOS.getRegistroChiamate());


//azzero il registro chiamate 
iOS.azzeraChiamate();
console.log(`Numero di chiamate: ${iOS.getNumeroChiamate()}`);
console.log(iOS.getRegistroChiamate());

//controllo il numero di telefono
console.log(`Il tuo numero: ${iOS.getNumeroTelefono()}`);

console.log("");
console.log("Android:");

const Android = new Smartphone(10, "3478547547", 1);


Android.chiamata(5);
console.log(`Costo al minuto: ${Android.getCostoAlMinuto()}     -     Credito rimasto: ${Android.getCreditoResiduo()}`);

//effettuo una chiamata di 5 minuti
Android.chiamata(5);
console.log(`Costo al minuto: ${Android.getCostoAlMinuto()}     -     Credito rimasto: ${Android.getCreditoResiduo()}`);

//verifico qual'è il numero di telefono
console.log(`Il tuo numero: ${Android.getNumeroTelefono()}`);
