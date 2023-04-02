// let noseX,noseY;
// let singlePose;

// function setup(){
//     createCanvas(800,500);
//     let capture = createCapture(VIDEO);
//     let posenet = ml5.poseNet(capture,modelLoaded);
//     posenet.on('pose',receivedPoses);
// }
// function receivedPoses(poses){
//     // console.log(poses);
//     if(poses.length >0){
//         singlePose = poses[0].pose;
//         noseX = singlePose.nose.x;
//         noseY = singlePose.nose.y;
//     }
// }
// function modelLoaded(){
//     console.log('loaded');
// }
// function ran(min,max){
//     return Math.random()*(max-min);
// }
// function draw(){
//     // r=ran(0,255);
//     // g=ran(0,255);
//     // b=ran(0,255);
//     // fill(r,g,b);
//     // ellipse(mouseX,mouseY,100,50);
//     image(capture,0,0);
//     fill(255,67,90);
//     ellipse(noseX,noseY,50,50);
// }

let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);

}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}
function rand(min,max){
    return Math.random()*(max-min);
}
function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {

    image(capture, 10, 10);
    r=rand(0,255);
    g=rand(0,255);
    b=rand(0,255);
    fill(r,g,b);

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,8);
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }
    }

    

}