quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye"];
timercounter=0;
timercheck="";
randomNumber=Math.floor((Math.random()*quick_draw_data_set.length)+1);

sketch=quick_draw_data_set[randomNumber];

document.getElementById("drawsketch").innerHTML="Sketch to be Drawn "+ sketch;

function updateCanvas(){
    background("white");
    randomNumber=Math.floor((Math.random()*quick_draw_data_set.length)+1);

    sketch=quick_draw_data_set[randomNumber];

    document.getElementById("drawsketch").innerHTML="Sketch to be Drawn "+ sketch;
}
function preload(){
    classifier=ml5.imageClassifier("DoodleNet");
}

function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}

function draw(){
checkSketch();
}

function checkSketch(){
    timercounter++;
    if(timercounter>400){
        timercounter=0;
        timercheck="completed";
    }
}