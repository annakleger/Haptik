let test_data;

var grid_unit = 50;

let col = 14
let row = 14
let cell_size = 0;

let patterns = new Array();

// This function loads resources that will be used later.
function preload() {
    let url_test = "../../larissa_tracking.json";
    loadJSON(url_test, loaded);

    png1 = loadImage('../img/4Zeichenfläche 1.png');


    patterns[0] = loadImage('../img/patterns-01.png');
    patterns[1] = loadImage('../img/patterns-02.png');
    patterns[2] = loadImage('../img/patterns-03.png');
    patterns[3] = loadImage('../img/patterns-04.png');
    patterns[4] = loadImage('../img/patterns-05.png');
    patterns[5] = loadImage('../img/patterns-06.png');
    patterns[6] = loadImage('../img/patterns-07.png');
    patterns[7] = loadImage('../img/patterns-08.png');
    patterns[8] = loadImage('../img/patterns-09.png');
    patterns[9] = loadImage('../img/patterns-10.png');
    patterns[10] = loadImage('../img/patterns-11.png');
    patterns[11] = loadImage('../img/patterns-12.png');
    patterns[12] = loadImage('../img/patterns-13.png');
    patterns[13] = loadImage('../img/patterns-14.png');
    patterns[14] = loadImage('../img/patterns-15.png');
    patterns[15] = loadImage('../img/patterns-16.png');
    patterns[16] = loadImage('../img/patterns-17.png');
    patterns[17] = loadImage('../img/patterns-18.png');
    patterns[18] = loadImage('../img/patterns-19.png');
    patterns[19] = loadImage('../img/patterns-20.png');
    patterns[20] = loadImage('../img/patterns-21.png');
    patterns[21] = loadImage('../img/patterns-22.png');
    patterns[22] = loadImage('../img/patterns-23.png');
    patterns[23] = loadImage('../img/patterns-24.png');
    patterns[24] = loadImage('../img/patterns-25.png');
    patterns[25] = loadImage('../img/patterns-26.png');
    patterns[26] = loadImage('../img/patterns-27.png');
    patterns[27] = loadImage('../img/patterns-28.png');
    patterns[28] = loadImage('../img/patterns-29.png');
    patterns[29] = loadImage('../img/patterns-30.png');
    patterns[30] = loadImage('../img/patterns-31.png');
    patterns[31] = loadImage('../img/patterns-32.png');
    patterns[32] = loadImage('../img/patterns-33.png');
    patterns[33] = loadImage('../img/patterns-34.png');
    patterns[34] = loadImage('../img/patterns-35.png');
    patterns[35] = loadImage('../img/patterns-36.png');
    patterns[36] = loadImage('../img/patterns-37.png');
    patterns[37] = loadImage('../img/patterns-38.png');
    patterns[38] = loadImage('../img/patterns-39.png');
    patterns[39] = loadImage('../img/patterns-40.png');
    patterns[40] = loadImage('../img/patterns-41.png');
    patterns[41] = loadImage('../img/patterns-42.png');
    patterns[42] = loadImage('../img/patterns-43.png');
    patterns[43] = loadImage('../img/patterns-44.png');
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

    angleMode(DEGREES);

    noLoop();

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
        /* if (typeof hand != String) {
             return hand
         }*/
    return hand.split(", ")
}

//Wird kontinuierlich ausgeführt
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
    //noStroke();

    // console.log(face_positions)
    for (let x = 0; x <= col; x += 1) {
        for (let y = 0; y <= row; y += 1) {
            fill('#060C3C');

            square(x * cell_size, y * cell_size, cell_size)

        }
    }
}



function show_gesture(value) {
    let face_positions = get_positions_face(test_data[value])
    let hand = get_hand(test_data[value])
        //console.log(hand);
    for (let x = 0; x <= col; x += 1) {
        for (let y = 0; y <= row; y += 1) {
            // check the position of the face
            // aginst the grid
            for (let i = 0; i < face_positions.length; i++) {
                const element = face_positions[i];
                let pos_x = element.x
                let pos_y = element.y
                if (x == pos_x && y == pos_y) {
                    let bildnummer;
                    let bild;
                    let welcheHand;
                    for (let h = 0; h < hand.length; h++) {
                        console.log(hand[h]);
                        const hands = hand[h].split(",")
                        for (const el of hands) {
                            const parts = el.split("")
                            welcheHand = parts[0]
                            bildnummer = parts[1]
                            console.log(bildnummer);
                            if (bildnummer == undefined) {
                                continue
                            }
                            bild = patterns[bildnummer - 1];



                            if (welcheHand == "R") {
                                push();
                                translate(x * cell_size + cell_size / 2, y * cell_size + cell_size / 2);
                                rotate(0);
                                image(bild, -cell_size / 2, -cell_size / 2, cell_size, cell_size);
                                pop();

                                //blendMode(OVERLAY);
                                tint(255, 150); //deckkraft

                            } else {
                                push();
                                translate(x * cell_size + cell_size / 2, y * cell_size + cell_size / 2);
                                rotate(90);
                                image(bild, -cell_size / 2, -cell_size / 2, cell_size, cell_size);
                                pop();
                            }
                        }

                        //console.log(bild);
                    }



                    // image(bild, x * cell_size + cell_size / 2, y * cell_size + cell_size / 2, cell_size, cell_size);

                    //fill(255, 100, 255, 70)
                    //square(x * cell_size, y * cell_size, cell_size)
                }
            }



        }
    }
}


//Funktion für save-button erstellen
function saveSketch() {
    save("Entwurf.png");
}