Webcam.set({
    width : 350,
    height : 350,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("Webcam-Result").innerHTML = "<img src="+data_uri+" id='any_id'>";
     });
}

console.log(ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/g4P2kDjLv/model.json', model_loaded);

function model_loaded(){
    console.log("model is loaded");
}


function identify(){
    img = document.getElementById("any_id");
    classifier.classify(img, get_result);
}

function get_result(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object-span").innerHTML = results[0].label;
        document.getElementById("accuracy-span").innerHTML = results[0].confidence.toFixed(3);
    }
}