var button = document.querySelector ('button');
var input = document.getElementByClassName('inputbox');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(Input.value);    
}
);