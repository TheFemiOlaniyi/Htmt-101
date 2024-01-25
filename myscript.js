var button = document.querySelector ('button');
var box = document.getElementById('changeme');
var box2 = document.getElementById('changeme2');
var box3 = document.getElementById('changeme3');
var box4 = document.getElementById('changeme4');

button.onclick = function changecolorofbox(){
    if(box.style.background == 'red'){

        box.style.background = 'blue';
        box4.style.background = 'blue';

    }
    else {
        box.style.background = 'red';
        box4.style.background = 'red';

    }

    if(box2.style.background == 'blue'){

        box2.style.background = 'red';
        box3.style.background = 'red';

    }
    else {
        box2.style.background = 'blue';
        box3.style.background = 'blue';

    }

}

function additional () {
    let result = x + y
    console.log ("the result is ${result}")
}

alert ("hello")
