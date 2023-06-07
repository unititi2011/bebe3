som="";
status2 ="";
objetos=[];
function preload() {
    som=loadSound("buzzer_alarm.mp3")
}
function setup() {
    canvas=createCanvas(380,380);
    canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
    
}
function inicio() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("sta").innerHTML="Status detectando objetos"
}
function modelLoaded() {
    console.log("modeloCarregado")
    status2="true";
}
function gotResult(error,results) {
    if(error){
        console.error(error);
    }
    else{console.log(results);
    objetos=results;
    }
}
function draw() {
    image(video,0,0,380,380);
    if (status2!=" ") {
        r=random(255);
        g=random(255);
        b=random(255);
       objectDetector.detect(video, gotResult)
        for(i=0;i<objetos.length;i++){
            document.getElementById("sta").innerHTML="Status objetos detectados"
            fill(r,g,b);
            porcentagem=floor(objetos[i].confidence*100);
            text(objetos[i].label+" "+porcentagem +"%"+objetos[i].x+15+objetos[i].y+15);
            if (objetos[i].label=="person") {
                document.getElementById("sta").innerHTML="bebê encontrado!!"
som.stop();

            }
            else{document.getElementById("sta").innerHTML="bebê não encontrado";
            som.play();
            if(objects.length == 0) { document.getElementById("numberOfObjects").innerHTML = "Bebê não encontrado"; console.log("play"); song.play(); }
        

            }
        }
        if(objetos.length == 0) { document.getElementById("sta").innerHTML = "Bebê não encontrado"; console.log("play"); song.play(); }
    }
    }
