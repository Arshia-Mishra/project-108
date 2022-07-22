function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/f0u0R854x/' , modelReady); 
}

function modelReady()
{
    classifier.classify(gotresults);
}

function gotResults(error, results)  {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' +
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
        (results[0].cofidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color= "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_label").style.color= "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        
    }
     img = document.getElementById('dog')
     img = document.getElementById('cat')
     img = document.getElementById('lion')
     img = document.getElementById('bird')
     img = document.getElementById('cross')

     if (results[0].label=="Dog"){
        img.src = 'doggie gif.gif';
        img.src = 'cat.png';
        img.src = 'brave-web-browser.png';
        img.src = 'chick.png';
        img.src = 'cross.png';

        
     }else if (results[0].label=="Cat"){
        img.src = 'dog.png';
        img.src = 'cat gif.gif';
        img.src = 'brave-web-browser.png';
        img.src = 'chick.png';
        img.src = 'cross.png';

        
    }else if (results[0].label=="lion"){
        img.src = 'dog.png';
        img.src = 'cat.png';
        img.src = 'lion gif.gif';
        img.src = 'chick.png';
        img.src = 'cross.png';

    }else if (results[0].label=="bird"){
        img.src = 'dog.png';
        img.src = 'cat.png';
        img.src = 'brave-web-browser.png';
        img.src = 'bird gif.gif';
        img.src = 'cross.png';
   

    }if (results[0].label=="cross"){
        img.src = 'dog.png';
        img.src = 'cat.png';
        img.src = 'brave-web-browser.png';
        img.src = 'cick.png';
        img.src = 'cross gif.gif';
   

}