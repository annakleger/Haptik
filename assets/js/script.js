console.log('hallo von extern');



let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
    n++;
    document.getElementById("element").style.left = (n * 5) + "px";

}

function neuesElement() {
    let div = document.createElement("div"); //div erzeugen
    div.classList.add('random'); //dem div eine Klasse hinzufügen
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div); //div hier anhängen
}