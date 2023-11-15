let firstDiv=document.getElementById('first');
let H1=document.getElementById('h1');
let button_1Btn=document.getElementById('button_1');
let button_2Btn=document.getElementById('button_2');
let button_3Btn=document.getElementById('button_3');
let button_4Btn=document.getElementById('button_4');
let button_5Btn=document.getElementById('button_5');
let button_6Btn=document.getElementById('button_6');
let button_7Btn=document.getElementById('button_7');
let button_8Btn=document.getElementById('button_8');
let colors_1=document.getElementById('color_1');
let colors_2=document.getElementById('color_2');
let h1=20;
let Bradius=0;
let FirstWidth=220;
let FirstHeight=50;

button_1Btn.addEventListener('click',()=>{
    h1=h1+5;
  H1.style.fontSize=h1+"px";
})
button_2Btn.addEventListener('click',()=>{
    h1=h1-5;
  H1.style.fontSize=h1+"px";
})

button_3Btn.addEventListener('click',()=>{
   Bradius=Bradius+5;
  firstDiv.style.borderRadius=Bradius+"px";
})
button_4Btn.addEventListener('click',()=>{
    Bradius=Bradius-5;
   firstDiv.style.borderRadius=Bradius+"px";
 })

button_5Btn.addEventListener('click',()=>{
    FirstWidth=FirstWidth+5;
  firstDiv.style.width=FirstWidth+"px";
})
button_6Btn.addEventListener('click',()=>{
    FirstWidth=FirstWidth-5;
  firstDiv.style.width=FirstWidth+"px";
})

button_7Btn.addEventListener('click',()=>{
    FirstHeight=FirstHeight+5;
  firstDiv.style.height=FirstHeight+"px";
})
button_8Btn.addEventListener('click',()=>{
    FirstHeight=FirstHeight-5;
  firstDiv.style.height=FirstHeight+"px";
})
colors_1.addEventListener('input',()=>{
    firstDiv.style.color= colors_1.value;
})
colors_2.addEventListener('input',()=>{
    firstDiv.style.backgroundColor= colors_2.value;
})


