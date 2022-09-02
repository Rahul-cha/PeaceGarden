vari=0;// Start point
var images=[];
var time =3000;
// Image List
images[0]='bg.jpg';
images[1]='bgg.jpg';
images[2]='le.jpg';
images[3]='z.PNG';
// Change Image
function changeImg(){
  document.slide.src=images[i];
  if(i<images.length-1){
    i++;
  }else{
    i=0;
 }
  setTimeout("changeImg()",time);
}

window.onload = changeImg;