let test_data;
let larissa_data;

var grid_unit = 50;


function setup() {

    //Canvas erstellen und einmitten abhängig von der window-Grösse; müsste noch automatischen Refresh bei canvasResized programmieren
    var coordinate_canvas = createCanvas(700, 700);
    coordinate_canvas.position(windowWidth / 2 - 350, windowHeight / 2 - 350);

    textSize(36);

    //json file muess usserhalb vom p5 ordner sie, dass es chan glade werde
    // let url_test = "../../test.json";
    // loadJSON(url_test, loaded);
    let url = "../../larissa_tracking.json";
    loadJSON(url, loaded);

    let save_button = createButton("Speichern");
    save_button.position(40, 990);
    save_button.mousePressed(saveSketch);

}

function loaded(data) {
    // test_data = data;
    larissa_data = data;
}



function draw() {
    colorMode(HSB); //Vorteil: drei Parameter oder vier mit Transparenz; hue (0-360), saruration (0-100), brightness (0-100), alpha (0-1)
    grid();

    noStroke();

    //Beispielkreis; hellgrün
    fill(78, 60, 80);
    circle(25, 25, 50);

    //Beispielkreis; teal
    fill(180, 40, 50, 0.6);
    circle(475, 375, 150);


    //Beispielkreis; orange
    fill(10, 80, 80, 0.5);
    circle(425, 425, 50);


    //test mit daten aus dem test.json file
    // let xkoordinate = (test_data.gesichtskoordinatex - 1) * 50 + 25;
    // let ykoordinate = (test_data.gesichtskoordinatey - 1) * 50 + 25;

    // fill(60, 100, 100, 0.5);
    // circle(xkoordinate, ykoordinate, 50);

    //daten aus dem file larissa_tracking.json


    let hand;

    //ich han im Json dwert vo de rechte hand glah und bi de linke immer +10 aber ohni L

    //positionierung des Mittelpunktes nach Gesichtskarte
    let xkoordinate = (larissa_data.facex - 1) * 50 + 25;
    let ykoordinate = (larissa_data.facey - 1) * 50 + 25;

    //Kreis zeichnen
    circle(xkoordinate, ykoordinate, 50);

    //Farbe nach Handkarte
    let hue = map(hand, 1, 0, 38, 360);
    fill(hue, 100, 100, 0.8);


}

//grid template with coordinate display by Owen Roberts
//Koordinatensystem-Grid zur ersten Orientierung
function grid() {
    background(0, 0, 75);
    stroke(0, 0, 100);
    for (let x = 0; x <= width; x += grid_unit) {
        for (let y = 0; y <= height; y += grid_unit) {
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }
}


function saveSketch() {
    save("Entwurf.png");
}