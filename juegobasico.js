let pxe = 0;
let pye = 400;
let g = true;
let h = true;

let rx = 300;
let izq= false;
let der= false;
function setup() {
  createCanvas(800,600);
}


function draw() {
  background(0,0,25);
   fill(0,0,255);
   ellipse(pxe,pye,40,40);
   fill(0,255,0);


   rect(rx,570,200,20);

   if (izq==true){
    rx = rx - 5;
   }
   if(der==true){
    rx = rx + 5;
   }
   
   if (g == true){
    pxe = pxe + 2;
    if(pxe == 780){
      g=false;
    }
   }
   
   if (g == false){
    pxe = pxe - 2;
    if(pxe == 20){
      g = true;
    }
   }
   textSize(36);
   text(pxe,400,30);
   
   if (h == true){
    pye = pye + 2;
    if(pye == 580){
      h=false;
    }
   }
   
   if (h == false){
    pye = pye - 2;
    if(pye == 20){
      h = true;
    }
   }
   textSize(36);
   text(pye,10,300);

   if (pxe > rx && pxe < rx + 200){
    if(pye + 20 == 570){
      h = false;
    }
   }
}
//termino el function Draw

function keyPressed(){
  if(key == "a"){
    izq = true;
  }

  if(key == "d"){
    der = true;
  }
}
 
function keyReleased(){
    if(key == "a"){
      izq= false;
    }
 
    if(key == "d"){
      der = false;
    }
  }
