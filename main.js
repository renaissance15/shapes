function preload(){

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
}

function draw() {

    image(video, 140, 80, 350, 325);
    fill(35, 67, 98);
    stroke(89, 145, 234);
    circle(40, 40, 80);
    circle(40, 440, 80);
    circle(600, 440, 80);
    circle(600, 40, 80);

    fill(58, 234, 62);
    stroke(71, 211, 155);
    rect(80, 30, 480, 20);
    rect(80, 430, 480, 20);
    rect(30, 80, 20, 320);
    rect(590, 80, 20, 320);
}