import { polokLista } from "./adat.js"

export function szuresNevSzerint(lista, szurtSzoveg) {
    const SZURTLISTA = lista.filter(function(elem) {
        return elem.nev.includes(szurtSzoveg)
    })
    return SZURTLISTA
}

export function kosarbanTorles(lista, index) {
    lista.splice(index, 1)
    return lista;
}

export function kartyakOsszeallitasa(lista) {
    let txt = ""
    txt += `<div class="card" style="width:300px">`;
    array.forEach((element, i) => {
        txt += `<div><img class="card-img-left" src="${element.kep}" alt="Card image"></div>`;
    });
}

