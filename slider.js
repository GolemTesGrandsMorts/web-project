var slide = new Array("pictures/lac1.jpg", "pictures/montagne1.jpg", "pictures/montagne2.jpg", "pictures/lac6.jpg");
var current = 0;
function ChangeSlide(sens){
    current += sens;
    if(current<0)
        current = slide.length -1;
    if (current > slide.length -1)
        current =0;
    document.getElementById("slide").src = slide[current];
    
}
setInterval("ChangeSlide(1)", 10000);

