let loadedJSON = null;
let test;
let gesichtskoordinatex;
let gesichtskoordinatey;
var grid_unit = 50;


function preload() {


}

function setup() {

    //Canvas erstellen und einmitten abhängig von der window-Grösse; müsste noch automatischen Refresh bei canvasResized programmieren
    var coordinate_canvas = createCanvas(700, 700);
    coordinate_canvas.position(windowWidth / 2 - 350, windowHeight / 2 - 350);

    textSize(36);
    loadBtn = createButton("Load JSON from file");
    loadBtn.position(30, 1000);
    loadBtn.mousePressed(loadJSONFile);
}

function loadJSONFile() {
    // Load the JSON from file
    loadedJSON = loadJSON('test.json', onFileload);
}

function onFileload() {
    console.log("success");

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

    fill(60, 100, 100, 0.5);
    circle(test.gesichtskoordinatex, test.gesichtskoordinatey, 50);


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