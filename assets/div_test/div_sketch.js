let test_data;
var grid_unit = 50;

let col = 14
let row = 14
let cell_size = 0

// This function loads resources that will be used later.
function preload() {
    let url_test = "../../larissa_tracking.json";
    loadJSON(url_test, loaded);
}


function setup() {
    //Canvas erstellen und einmitten abhängig von der window-Grösse; müsste noch automatischen Refresh bei canvasResized programmieren
    var coordinate_canvas = createCanvas(700, 700);
    coordinate_canvas.position(windowWidth / 2 - 350, windowHeight / 2 - 350);

    cell_size = width / col

    let save_button = createButton("Speichern");
    save_button.position(40, 990);
    save_button.mousePressed(saveSketch);
}

function loaded(data) {
    test_data = data;

    let hand = get_hand(test_data[4])
    console.log(hand)
}

function get_positions_face(face_data) {
    // console.log(face_data["face"])
    let result = []
    let face = face_data["face"]
    let values = face.split(", ")
        // console.log(values)
    for (let i = 0; i < values.length; i++) {
        let value = values[i]
        let x = parseInt(value.split("/")[0])
        let y = parseInt(value.split("/")[1])
        let obj = { x, y }
        result.push(obj)
    }
    return result
}

function get_hand(hand_data) {

    let hand = hand_data["hand"]
    if (typeof hand != String) {
        return hand
    }
    return hand.split(", ")
}

function draw() {
    grid()
    for (let i = 0; i < test_data.length; i++) {
        show_gesture(i)
    }

    stroke(255, 0, 0);
}


//Koordinatensystem-Grid zur ersten Orientierung
function grid(value) {
    // background(50, 50, 50);
    stroke(0, 0, 255);
    // console.log(face_positions)
    for (let x = 0; x <= col; x += 1) {
        for (let y = 0; y <= row; y += 1) {
            fill(255)
            square(x * cell_size, y * cell_size, cell_size)

        }
    }
}

function show_gesture(value) {
    let face_positions = get_positions_face(test_data[value])
    let hand = get_hand(test_data[value])
        // console.log(face_positions)
    for (let x = 0; x <= col; x += 1) {
        for (let y = 0; y <= row; y += 1) {
            // check the position of the face
            // aginst the grid
            for (let i = 0; i < face_positions.length; i++) {
                const element = face_positions[i];
                let pos_x = element.x
                let pos_y = element.y
                if (x == pos_x && y == pos_y) {
                    fill(100)
                    square(x * cell_size, y * cell_size, cell_size)
                }
            }



        }
    }
}



// function neuesElement() {
//     let div = document.createElement("div");

//     div.classList.add('random');
//     // div.style.left = Math.random() * window.innerWidth + "px";
//     // div.style.top = Math.random() * window.innerHeight + "px";
//     // div.style.left = (test_data.facex - 1) * 50 + 25 + "px";
//     // div.style.top = 50 + "px";

//     document.body.appendChild(div);
// }


function saveSketch() {
    save("Entwurf.png");
}