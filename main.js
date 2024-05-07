import { polokLista } from "./adat.js";
import { kartyakOsszeallitasa, kosarbaButton, megjelenitesKartyak, szuresNevSzerint } from "./fuggvenyek.js";


init(polokLista)

kosarbaButton(polokLista)
nevSzuresEsemeny()

function init() {
    megjelenitesKartyak(kartyakOsszeallitasa(polokLista))

}


function nevSzuresEsemeny(){
    const szuroELEM = $("#name");
    szuroELEM.on("keyup", function(){
        let szurtSzoveg = szuroELEM.val();
        const LISTA = szuresNevSzerint(polokLista, szurtSzoveg);
        init(LISTA)
    });
}