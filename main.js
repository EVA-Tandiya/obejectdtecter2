img = " ";
status = "";

function preload(){
    img = loadImage('dog.jpg');
}

 function setUp(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
 }

  function modelLoaded(){
      console.log('Model Loaded!');
      status = true;
      objectDetector.detect(img, gotResults);
  }

  function gotResults(error, results){
        if(error){
            console.error(error);
        } else{
            console.log(results);
        }
  }