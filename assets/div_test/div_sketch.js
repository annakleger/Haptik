let test_data;
var grid_unit = 50;



function setup() {

    //Canvas erstellen und einmitten abhängig von der window-Grösse; müsste noch automatischen Refresh bei canvasResized programmieren
    var coordinate_canvas = createCanvas(700, 700);
    coordinate_canvas.position(windowWidth / 2 - 350, windowHeight / 2 - 350);

    neuesElement();

    let url_test = "../../test.json";
    loadJSON(url_test, loaded);

    div.position(xkoordinate, ykoordinate);

}

function loaded(data) {
    test_data = data;
    ////larissa_data = data;
}


function draw() {


    grid();
    stroke(255, 0, 0);

    let xkoordinate = (test_data.facex[5] - 1) * 50 + 25;
    let ykoordinate = (test_data.facey[5] - 1) * 50 + 25;



}

//grid template with coordinate display by Owen Roberts
//Koordinatensystem-Grid zur ersten Orientierung
function grid() {
    background(50, 50, 50);
    stroke(0, 0, 255);
    for (let x = 0; x <= width; x += grid_unit) {
        for (let y = 0; y <= height; y += grid_unit) {
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }
}



function neuesElement() {
    let div = document.createElement("div");

    div.classList.add('random');
    // div.style.left = Math.random() * window.innerWidth + "px";
    // div.style.top = Math.random() * window.innerHeight + "px";
    // div.style.left = (test_data.facex - 1) * 50 + 25 + "px";
    // div.style.top = 50 + "px";

    document.body.appendChild(div);
}