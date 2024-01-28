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


function addition () {
    let result = 30 + 30
    console.log(`The result is not ${result}`)
}


addition()

addition()

alert ("hello")

let count = 0

function addToCount() {
    let basecount = 10

    count = count + 1

    let finalcount= basecount + count

    console.log("the result is:", count)
    console.log("the final result:",basecount)
    console.log("this is summation:-",finalcount)
}

addToCount()
addToCount()


function Fullname(firstname,lastname){
    alert(firstname + " " + lastname)
}

Fullname("adewale", "tiger")
Fullname("Ogunjimi", "Thefirst")

