import { polokLista } from "./adat.js"
import {kosar} from "./kosar.js"

export function szuresNevSzerint(lista, szurtSzoveg){
    const SZURTLISTA = lista.filter(function(elem){
        return elem.nev.includes(szurtSzoveg);
    });
    return SZURTLISTA;
}

export function kartyakOsszeallitasa(lista) {
    let txt = "";
    lista.forEach((element, i) => {
        txt += `<div class="card col-sm-3 m-2 ">`;
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





export function kosarbaButton(termekIndex) {
    const gombELEM = $(".gomb");
    gombELEM.on("click", function(event) {
        const kosarELEM = $(".kosar")
        termekIndex = event.target.id;
        kosar.push(polokLista[termekIndex])
        console.log(kosar);
        const kosarText = kosarTartalom(kosar)
        kosarELEM.html(kosarText)
    })
}

export function kosarTartalom(lista) {
    let txt = "";
    lista.forEach((element) => {
        txt += `<div>`;
        txt += `<p>${element.nev} ----- ${element.ar}Ft</p>`;
        txt += `</div>`;
        txt += `</div>`;
        

    });
    return txt;
}

export function fizetendoOsszesen(lista) {
    
}

export function kartyaRendezNev(lista){
    const nevSzerintELEM = $("#rendezes");
    nevSzerintELEM.on("change", function(){
        if(nevSzerintELEM.val() === "azrendezes"){
            rendezesNev(lista);
            console.log(lista)
            megjelenitesKartyak(kartyakOsszeallitasa(lista));
        }
    });
}

function rendezesNev(lista){
    lista.sort(function(a,b){
        return a.nev.toUpperCase() > b.nev.toUpperCase() ? 1 : -1;
    });
    return lista;
}

export function kartyaRendezNovekvo(lista){
    const arSzerintiELEM = $("#rendezes");
    arSzerintiELEM.on("change", function(){
        if(arSzerintiELEM.val() === "arn"){
            rendezesArN(lista);
            console.log(lista)
            megjelenitesKartyak(kartyakOsszeallitasa(lista));
        }
    });
   
}

function rendezesArN(lista){
    lista.sort(function(a,b){
        return a.ar - b.ar;
    });
    return lista;
}

export function kartyaRendezCsokkeno(lista){
    const arSzerintiELEM = $("#rendezes");
    arSzerintiELEM.on("change", function(){
        if(arSzerintiELEM.val() === "arcs"){
            rendezesArCs(lista);
            console.log(lista)
            megjelenitesKartyak(kartyakOsszeallitasa(lista));
        }
    });
   
}

function rendezesArCs(lista){
    lista.sort(function(a,b){
        return b.ar - a.ar;
    });
    return lista;
}


