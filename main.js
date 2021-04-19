let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];
let seznamVyvolanych = document.querySelector("#seznam")
let vyherniListina = document.querySelector("#vyherka")
let pocitadlo = document.querySelector('#counter')
function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length)
    
    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex]
    
    vyherniListina.innerHTML = vyherniJmeno

    // Vyřadíme vylosované jméno z osudí
    
    jmena.splice(vyherniIndex, 1)

    // Výherní jméno si uložíme do pole k ostatním výherním
    
    // tazenaJmena = tazenaJmena + vyherniJmeno
    tazenaJmena.unshift(vyherniJmeno);
    seznamVyvolanych.innerHTML = tazenaJmena

    // pridat pocitadlo tazenych jmen
    pocitadlo.innerHTML = tazenaJmena.length;
  }
  // resetovani vyvolavace
  function resetuj() {
    tazenaJmena.splice(0,tazenaJmena.length);
    vyherniListina.innerHTML = [];
    seznamVyvolanych.innerHTML = [];
    pocitadlo.innerHTML = 0;
  }