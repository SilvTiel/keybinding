
let log = console.log;

document.addEventListener('DOMContentLoaded', init);

function init(){
    // let txt = document.getElementById('txt');
    // txt.addEventListener('keydown', anyKey);
    document.body.addEventListener('keydown', anyKey);
}

function anyKey(ev){
    let target = ev.currentTarget;
    let tag = target.tagName;
    let char = ev.char || ev.charCode || ev.which;
    // log(char, tag);


    switch(char){
        case 87:
            document.getElementById("message").style.backgroundColor = "blue" ;
            break;
        case 83:
            document.getElementById("message").style.backgroundColor ="green";
            break;
        case 65:
            document.getElementById("body").style.backgroundColor="yellow";
            break;
        case 68:
            document.getElementById("body").style.backgroundColor="black";
            break;
    }
}