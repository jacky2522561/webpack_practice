import './index.css';
let btn = document.getElementById('btn');
let num = document.getElementById('num');
btn.addEventListener('click',function(){
    let a = parseInt(num.innerText,10);
    num.innerText=a+2;
})
