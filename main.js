import { polokLista } from "./adat.js";


function osszegezMindent(lista) {
    nevSzuresEsemeny();
}


nevSzuresEsemeny();


function nevSzuresEsemeny() {
    const szuroELEM = $("#szNev")
    szuroELEM.on("keyup", function() {
        let szuroSzoveg = szuroELEM.val()
        const LISTA = szuresNevSzerint(polokLista, szuroSzoveg)
        osszegezMindent(LISTA)
    })
}


