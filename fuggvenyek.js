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