quick_draw_data_set = ['aircraft carrier', 'bottle', 'box', 'mango', 'train', 'ball', 'computer mouse', 'elephant', 'drill', 'car ','fan', 'chair', 'remote', 'note', 'ring', 'television', 'door', 'mobile', 'clock', 'tap', 'bulb', 'cat', 'dog', 'computer mouse', 'shirt', 'pencil', 'eraser', 'pencil box', 'frame', 'banana', 'pencil box', 'cricket bat', 'tennis racket', 'wickets', 'writing pad', 'switch', 'guitar', 'piano', 'drum', 'tabla', 'violin', 'coffee cup', 'teapot', 'key', 'rubiks cube', 'curtain', 'airconditioner', 'doormat', 'building', 'swing', 'slide', 'umbrella', 'bicycle', 'car', 'bike', 'traffic lights', 'truck', 'auto', 'bucket', 'mug', 'glass', 'bottle', 'boat', 'bag', 'carrot', 'lion', 'computer', 'stool', 'lawn mower', 'skatboard','roller skates','couch','bed','book', 'tv setup box', 'bottle cap', 'tooth brush', 'painting brush', 'house', 'gun', 'dining table'];
random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
Element_of_array = quick_draw_data_set[random_number];
document.getElementById("sketch_name").innerHTML = "Sketch to be Drawn: "+ Element_of_array;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function updateCanvas() {

    background("white");
}

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}


function draw() {
        check_sketch();
        if (drawn_sketch = sketch) {
            answer_holder = "set";
            score = 1;
            Score = score;
        }
        // Set stroke weight to 13
        strokeWeight(13);
        // Set stroke color to black
        stroke(0);
        // If mouse is pressed, draw line between previous and current mouse positions
        if (mouseIsPressed) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    }

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}


function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    drawn_sketch = results[0].label;
    document.getElementById('label').innerHTML = 'Your Sketch: ' + reaults[0].label ;

    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
}


function check_sketch() {
    timer_check = time;
    document.getElementById('time').innerHTML = 'Timer: ' + timer_counter;
    console.log(timer_counter)
    if (timer_counter > 2000) {
        timer_counter = 0;
        timer_check = "completed"
    }
    if (timer_check == "completed" || answer_holder == "set") {
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }

}

function clear() {
    updateCanvas();
}