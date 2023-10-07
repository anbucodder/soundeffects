song = ''
function preload(){
    sound1 = loadSound("sound1.mp3");
    sound2 = loadSound("sound5.mp3");
    sound3 = loadSound("sound3.mp3");
    sound4 = loadSound("sound4.mp3");
}
function setup(){
    canvas = createCanvas(600 , 500);
    canvas.position(500 ,200);
}
function soun1(){
    song = 'sound1';
    sound1.play();
    sound2.stop();
    sound3.stop();
    sound4.stop();
}
function soun2(){
    song = 'sound2';
    sound2.play();
    sound1.stop();
    sound3.stop();
    sound4.stop();
}
function soun3(){
    song = 'sound3';
    sound3.play();
    sound2.stop();
    sound1.stop();
    sound4.stop();
}
function soun4(){
    song = 'sound4';
    sound4.play();
    sound2.stop();
    sound3.stop();
    sound1.stop();
}

function stop(){
    song = ''
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
}
function draw(){

}