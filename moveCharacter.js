
const character = newImage('assets/green-character/static.gif')
let direction = null;
let x = 100;
let y = 250;

setInterval(function(){
    if(direction === 'west') {
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)


                              
