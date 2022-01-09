function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier(' https://teachablemachine.withgoogle.com/models/LPLHBElrn/model.json', modelready);
}
function modelready()
{
    classifier.classify(gotresults); 
}
function gotresults(error, results)
{
    console.log('gotresults');
    if(error) {
   console.error(error)
    }
    else{ 
        console.log(results); 
        random_number_r = Math.floor(Math.random() * 255) + 1; 
        random_number_g = Math.floor(Math.random() * 255) + 1; 
        random_number_b = Math.floor(Math.random() * 255) + 1; 
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label; 
        document.getElementById("result_confidence").innerHTML = "accuracy - " + (results[0].confidence * 100).toFixed(2) + " % "; 
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r  + ")"; 
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r  + ")";
        img1 = document.getElementById("Dog.png.png");
        img2 = document.getElementById("cat.jpeg.jpeg"); 
        img3 = document.getElementById("cow.PNG.PNG");
        img4 = document.getElementById("lion.png.png"); 
        if(results[0].label == "Barking") 
        {
            img1.src = 'dog_gif.gif'; 
            img2.src = 'cat.jpeg.jpeg'; 
            img3.src = 'cow.PNG.PNG'; 
            img4.src - 'lion.png.png'; 
        }
        else  if(results[0].label == "Meowing") 
        {
            img1.src = 'dog.png.png'; 
            img2.src = 'cats-runGIF.gif'; 
            img3.src = 'cow.PNG.PNG'; 
            img4.src - 'lion.png.png'; 
        }
        else  if(results[0].label == "Mooing") 
        {
            img1.src = 'dog.png.png'; 
            img2.src = 'cat.jpeg.jpeg'; 
            img3.src = 'cow.GIF.GIF'; 
            img4.startClassification - 'lion.png.png'; 
        }
        else{
            img1.src = 'dog.png.png'; 
            img2.src = 'cat.jpeg.jpeg'; 
            img3.src = 'cow.PNG.PNG'; 
            img4.src - 'lion-roar.gif.gif'; 
        }
    }

}