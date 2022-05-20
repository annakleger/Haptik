let test_data;

var grid_unit = 50;

let col = 14
let row = 14
let cell_size = 0

// This function loads resources that will be used later.
function preload() {
    let url_test = "../../larissa_tracking.json";
    loadJSON(url_test, loaded);

    png1 = loadImage('../img/4Zeichenfläche 1.png');


    pattern_1 = loadImage('../img/patterns_01.png');
    pattern_2 = loadImage('../img/patterns-02.png');
    pattern_3 = loadImage('../img/patterns-03.png');
    pattern_4 = loadImage('../img/patterns-04.png');
    pattern_5 = loadImage('../img/patterns-05.png');
    pattern_6 = loadImage('../img/patterns-06.png');
    pattern_7 = loadImage('../img/patterns-07.png');
    pattern_8 = loadImage('../img/patterns-08.png');
    pattern_9 = loadImage('../img/patterns-09.png');
    pattern_10 = loadImage('../img/patterns-10.png');
    pattern_11 = loadImage('../img/patterns-11.png');
    pattern_12 = loadImage('../img/patterns-12.png');
    pattern_13 = loadImage('../img/patterns-13.png');
    pattern_14 = loadImage('../img/patterns-14.png');
    pattern_15 = loadImage('../img/patterns-15.png');
    pattern_16 = loadImage('../img/patterns-16.png');
    pattern_17 = loadImage('../img/patterns-17.png');
    pattern_18 = loadImage('../img/patterns-18.png');
    pattern_19 = loadImage('../img/patterns-19.png');
    pattern_20 = loadImage('../img/patterns-20.png');
}

//Alles was nur einmal, beim ersten Laden der Seite ausgeführt werden soll
function setup() {
    //Canvas erstellen und einmitten abhängig von der window-Grösse; müsste noch automatischen Refresh bei canvasResized programmieren
    var coordinate_canvas = createCanvas(700, 700);
    coordinate_canvas.position(windowWidth / 2 - 350, windowHeight / 1.7 - 350);

    cell_size = width / col

    //save-button erstellen
    let save_button = createButton("Speichern");
    save_button.position(40, 990);
    save_button.mousePressed(saveSketch);


    // //hatching
    // var hatchingNumber = 2; //wie viele hatchings

    // for (var a = 1; a < hatchingNumber; a++) {

    //     hatching(100, 100, 50, 15); //1. positionierung x, 2. positionierung y, 3. laenge der linie/steigung, 4. anzahl der linien
}

function loaded(data) {
    test_data = data;

    // let hand = get_hand(test_data[4])
    // console.log(hand)
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

//Wird kontinuierlich ausgeführt
function draw() {
    grid()
    for (let i = 0; i < test_data.length; i++) {
        show_gesture(i)
    }

    stroke(255, 0, 0);

    image(png1, 9 * grid_unit, 2 * grid_unit);
    image(png1, 9 * grid_unit, 3 * grid_unit);
    image(pattern_13, 9 * grid_unit, 3 * grid_unit, grid_unit, grid_unit);
    tint(255, 200); //zweite Zahl bestimmt Deckkraft; 0-255


    rotate(PI / 4);
    image(png1, 250, 100);

}


//Koordinatensystem-Grid zur ersten Orientierung
function grid(value) {
    // background(50, 50, 50);

    //stroke(0, 0, 255);   
    noStroke();
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
                    fill(100, 100, 255, 70)
                    square(x * cell_size, y * cell_size, cell_size)
                }
            }



        }
    }
}



// function show_gesture(value) {
//     let face_positions = get_positions_face(test_data[value])
//     let hand = get_hand(test_data[value])
//         // console.log(face_positions)

//     for (let x = 0; x <= col; x += 1) {
//         for (let y = 0; y <= row; y += 1) {
//             // check the position of the face
//             // aginst the grid
//             for (let i = 0; i < face_positions.length; i++) {
//                 const element = face_positions[i];
//                 let pos_x = element.x
//                 let pos_y = element.y
//                 if (x == pos_x && y == pos_y) {
//                     fill(100, 100, 255, 70)
//                     square(x * cell_size, y * cell_size, cell_size)
//                 }


//                 for (let i = 0; i < hand.length; i++) {
//                     const element = hand[i];


//                     if (get_hand == L2) {
//                         img(patter_2);
//                     } else if (get_hand == R18) { img(pattern_14); } else { pattern_19; }

//                 }
//             }
//         }



//     }
// }


//     for (var i = 0; i < number; i++) {
//         stroke(220); //farbe
//         translate(0, 4); //wie nahe die linien beieinander sind
//         line(x, y, endX, endY); //1. punkt: start und ende, 2. punkt: start und ende
//     }
// }

//Funktion für save-button erstellen
function saveSketch() {
    save("Entwurf.png");
}