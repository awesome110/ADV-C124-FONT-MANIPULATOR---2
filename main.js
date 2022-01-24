function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas.createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw() {
    background('#969A97');
    image(video, 560, 150, 550, 550)
}
function modelLoaded() {
    console.log("The poseNet is Initialised")
}