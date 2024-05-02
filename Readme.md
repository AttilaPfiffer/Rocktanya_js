# Rock Tanya webáruház

## Specifikáció
1. A publikus felületen div-ekben jelenítsük meg az adatokat. Az előzetes minta alapján! 
2. Figyelj a  reszponzitvitásra!
3. Az oldalon legyen szűrési és rendezési lehetőség is!
4. Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. 
5. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
6. ++ Lehet, hogy szükséged lesz a localStorage használatára. 
7. ++ Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.  :D
8. ++ Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
9. A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

## Alkalmazott függvények:

**kartyakOsszeallitasa(lista) -> visszatérés: txt**
Adatokat állítja össze a kártyákhoz, lista generálása.

**megjelenitesKartyak(txt)**
Megjeleníti a kártyákat.

**kosarbaButton(termekIndex) -> visszatérés: lista**
A "Kosárba" gomb megnyomása után a termék neve a kosárba kerül. A kosarMegjelenites()-be belekerül a lista

**kosarOsszeallitas(lista) -> visszatérés: txt**
A kosár elemeit egy táblázatban állítja össze

**kosarMegjelenites(txt)**
A kosár elemeit egy táblázatban fogja megjelníteni

**szuresNevSzerint(lista, szurtSzoveg) -> visszatérés: SZURTLISTA**
Ha a termék nevét elkezdjük beírni a "Keresés" mezőbe, akkor csak azt fogja feldobni.

**kosarbanTorles(lista, index) -> visszatérés: lista**
A kosárban lévő termékeket a gombra kattintva törölni fogjuk

**urlapAdatok(lista)**
Adatokat elhelyezi a rendelésbe.

**osszegezMindent()**
Itt hívem meg a "main"-ben az összes metódust






