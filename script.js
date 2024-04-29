let parent=document.querySelector('.parent')
let div1=document.querySelector('.div1');
let div2=document.querySelector('.div2');
let box2=document.querySelector('.box2');

document.body.style.backgroundColor="black"

function mouseenter(){
    div1.style.backgroundColor="aqua";
    setTimeout(()=>{

        div1.style.backgroundColor="white"
    },1000)
}



function mouseleave(){
    div2.style.backgroundColor="aqua"
    setTimeout(()=>{
     div2.style.backgroundColor="white"
    },1000)
}


function mousedowndiv1(){
    div1.classList.add('animation');
    
    parent.style.backgroundColor="red";
    setTimeout(()=>{
        parent.style.backgroundColor="yellow";
        div1.classList.remove('animation')
    },1000)
}




function mousedowndiv2(){
div2.classList.add('animation')
parent.style.backgroundColor="blue";
setTimeout(()=>{
    parent.style.backgroundColor="yellow";
    div2.classList.remove('animation');
},1000)
}



function mousedownbox2(){
box2.classList.add('animation');
parent.style.backgroundColor="pink";
setTimeout(()=>{
    parent.style.backgroundColor="yellow";
    box2.classList.remove('animation');
},1000)
}