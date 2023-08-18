
var blog = document.getElementById('blog');
var blur = document.getElementById('blur');

blur.addEventListener("click", function(){
     if (blur.style.display = "none") {
             blog.style.display = "block";
         } else {
             blog.style.display = "none";
       }
});

var bmf = document.getElementById('bmf');
var blue = document.getElementById('blue');
blue.addEventListener("click", function(){
     if (blue.style.display = "none") {
             bmf.style.display = "block";
         } else {
             bmf.style.display = "none";
       }
});

var okay = document.getElementById('okay');
var bro = document.getElementById('bro');

bro.addEventListener("click", function(){
     if (bro.style.display = "none") {
             okay.style.display = "block";
         } else {
             okay.style.display = "none";
       }
});


var wor = document.getElementById('wor');
var edu = document.getElementById('edu');
var work = document.getElementById('work');
var education = document.getElementById('education');

work.addEventListener("click", function(){
    if(edu.style.display = 'none'){
        wor.style.display = 'block'
    }else {
        wor.style.display = "none"
    }
})
education.addEventListener("click", function(){
    if(wor.style.display = 'none'){
        edu.style.display = 'block'
    }else {
        edu.style.display = "none"
    }
})


 
const close = document.getElementById('close');
const nav = document.getElementById('navmenu');
const bar = document.getElementById('bar')

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add( 'collapsing', 'show' )
    })
    
}


if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('collapsing', 'show');
    })
    
}