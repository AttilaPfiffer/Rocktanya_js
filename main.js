import { polokLista } from "./adat.js";
import { kartyakOsszeallitasa, kosarbaButton, megjelenitesKartyak, szuresNevSzerint, kartyaRendezNev, kartyaRendezNovekvo, kartyaRendezCsokkeno } from "./fuggvenyek.js";


init(polokLista)

kosarbaButton(polokLista)
nevSzuresEsemeny()
kartyaRendezesek()

function init(lista) {
    megjelenitesKartyak(kartyakOsszeallitasa(lista))

}


function nevSzuresEsemeny(){
    const szuroELEM = $("#name");
    szuroELEM.on("keyup", function(){
        let szurtSzoveg = szuroELEM.val();
        const LISTA = szuresNevSzerint(polokLista, szurtSzoveg);
        init(LISTA)
    });
}

function kartyaRendezesek() {
    kartyaRendezNev(polokLista)
    kartyaRendezNovekvo(polokLista)
    kartyaRendezCsokkeno(polokLista)
}