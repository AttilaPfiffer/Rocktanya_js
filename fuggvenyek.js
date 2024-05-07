import { polokLista } from "./adat.js"

export function szuresNevSzerint(lista, szurtSzoveg){
    const SZURTLISTA = lista.filter(function(elem){
        return elem.nev.includes(szurtSzoveg);
    });
    return SZURTLISTA;
}

export function kartyakOsszeallitasa(lista) {
    let txt = "";
    lista.forEach((element, i) => {
        txt += `<div class="card col-sm-4">`;
        txt += `<div><img class="card-img" src="${element.kep}" alt="Card image" style="width:50% align: center"></div>`;
        txt += `<div class="card-body">`;
        txt += `<h4 class="card-title">${element.nev}</h4>`;
        txt += `<p class="card-text">${element.ar}Ft</p>`;
        txt += `</div>`;
        txt += `<button type="button" class="btn btn-default gomb" id = "${i}" style = "background-color: rgb(0, 1, 79); color: white; gap: 50px;">Kosárba</button>`;
        txt += `</div>`;
        

    });
    return txt;
}

export function megjelenitesKartyak(txt){
    const kartyaELEM = $("#kartyak");
    kartyaELEM.html(txt);
}

let kosar = [];


export function kosarbaButton(termekIndex) {
    const gombELEM = $(".gomb");
    $(".gomb").on("click", function(event) {
        console.log(event.target.id);

    })
}



