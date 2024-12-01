let btn=document.getElementById("btn");

let nav=document.querySelector(".nav");
btn.onclick=function(){

    btn.classList.toggle("fa-times");
    nav.classList.toggle("active");
    
    if(nav.className=="nav active"){
        nav.style.display="block";
    }
    else{
        nav.style.display="none";
        
    }
}

let btnpervious=document.getElementById("btnpervious");
let btnnext=document.getElementById("btnnext");

let loadMore=document.querySelector(".package .load_more .btn");

let current=6;

    
   



let imgs=["image/fulbari.jpg","image/sl.jpg","image/sl3.jpg"];

let index=0;

let img=document.getElementById("currentImg")
let one=document.querySelectorAll([".span .one"]);


let textcontent=document.getElementsByClassName("txtcontent")[0];
let h=document.getElementsByTagName("h1")[0];

function show(index){


    for(let i=0;i<one.length;i++){
        one[i].classList.remove("active");
    }
    one[index].classList.add("active");

    img.src=imgs[index];
    
}

one[0].onclick=function(){
    show(0);

}
one[1].onclick=function(){
    show(1);
}
one[2].onclick=function(){
    show(2);

}
btnpervious.onclick=function (){

    index--;
    if(index<0){
    
        index=imgs.length-1;
    }

    show(index);
}

btnnext.onclick=function (){

    index++;

    if(index>=imgs.length){
        index=0;
    }
    show(index);
}

function pack(){

   
let boxes=[...document.querySelectorAll(".package .boxingt")];
for(let i=current;i<current+3;i++){

    boxes[i].style.display="inline-block";
};
current+=3;

if(current>=boxes.length){
   loadMore.style.display="none";

}

}

