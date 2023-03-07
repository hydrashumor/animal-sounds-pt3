aligator = 0;
lizard = 0;
snake = 0;
function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6btS0yDPQ/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
   if(error){
    console.error(error);
   }else{
    console.log(results);
    r = Math.floor(Math.random()*255)+1;
    g =Math.floor(Math.random()*255)+1;
    b = Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = ' Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";
        img = document.getElementById("animal");
        if(results[0].label == "aligator"){
             img.src = "aligator.jpg";
             aligator = aligator+1;
        }
        else if(results[0].label =="lizard"){
            img.src = "lizard.jpg";
            lizard = lizard + 1;
        }
        else if(results[0].label == "snake"){
            img.src ="lizard.jpg";
            lizard =lizard +1;
        }
        else{
            img.src = "ear.png";
        }
   }

}