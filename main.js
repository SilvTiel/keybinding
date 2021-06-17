
let log = console.log;
let modifier = 15;

document.addEventListener('DOMContentLoaded', init);

function init(){
    document.body.addEventListener('keydown', anyKey);
}

function anyKey(ev){
    log(ev);
    let char = ev.which;
    // log(char);

    switch(char){
        // Div verranderen kleur
        case 69: // E
            document.getElementById("body").style.backgroundColor = "blue" ;
            log("You pressed " + char);
            break;
        case 82: // R
            window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            log("You pressed " + char);
            break;
        case 84: // T
            document.getElementById("body").style.backgroundColor="yellow";
            log("You pressed " + char);
            break;
        case 89: // Y
            document.getElementById("body").style.backgroundColor="black";
            log("You pressed " + char);
            break;
            // div verranderen positie??
        case 87: // W
            play()
            log("You pressed " + char);
            break;
        case 65: // A
            window.print()
            log("You pressed " + char);
            break;
        case 83: // S
            remove();
            log("You pressed " + char);
            break;
        case 68: // D
            add();
            log("You pressed " + char);
            break;
    }
}


function play() {
    var audio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/explosion_02.wav');
    audio.play();
  }

function remove() {
    var element = document.getElementById("block1");
    element.classList.remove("block--filled");
}

function add() {
    var element = document.getElementById("block1");
    element.classList.add("block--filled");
}
