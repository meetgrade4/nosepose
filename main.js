function preload() {
    
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function draw() {
    image(video,0,0,300,300);
}

function snapshot_take() {
    
}

function modelLoaded() {
    console.log("modelLoaded")
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log(nose_x, nose_y);
    }
}