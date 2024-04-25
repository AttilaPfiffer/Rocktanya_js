import { polokLista } from "./adat.js";
import { kartyakOsszeallitasa } from "./fuggvenyek.js";


function osszegezMindent(lista) {
    nevSzuresEsemeny();
}

kartyakOsszeallitasa();
nevSzuresEsemeny();


function nevSzuresEsemeny() {
    const szuroELEM = $("#szures")
    szuroELEM.on("keyup", function() {
        let szuroSzoveg = szuroELEM.val()
        const LISTA = szuresNevSzerint(polokLista, szuroSzoveg)
        osszegezMindent(LISTA)
    })
}


