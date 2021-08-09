let spacing = document.getElementById("spacing");
let color = document.getElementById("color");
let image =document.getElementById("image");
let blur = document.getElementById("blur");
spacing.addEventListener("change",function(event){
    event.preventDefault();
    image.style.padding=`${spacing.value}px`;
});
color.addEventListener("change",function(){
    image.style.backgroundColor=color.value;
})
blur.addEventListener("blur",function(){
    image.style.filter=`blur(${blur.value}px)`;
});

