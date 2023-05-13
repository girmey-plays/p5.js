function preload()
{



}



function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{

image(video, 0, 0, 400, 400);
fill(255, 0, 0);
stroke(255, 0, 0);
circle(50, 50, 50);
circle(50, 450, 50);
circle(600, 50, 50);
circle(600, 450 , 50);

}