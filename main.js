let abb=document.getElementById("heart-2");
let bcc=document.getElementById("like-2");
console.log(abb);
console.log(bcc);
var bon=true
abb.addEventListener('click',function(){

     var b=203;
    if(bon==false){
        abb.style.color="black"
        bcc.innerHTML=(b)+ "like"
        bon=true

     }
     else{
        abb.style.color="red"
        bcc.innerHTML=(b+1)+ "likes"
       bon=false
     }
})