let btn = document.querySelectorAll('.btn');
let body = document.querySelector('body');
let link = document.querySelector('a');

btn[0].addEventListener('click', function() {
    body.style.background = 'blue';
});

btn[1].addEventListener('dblclick', function() {
    body.style.background = 'hotpink';
});

btn[2].addEventListener('mousedown', function() { 
    body.style.background = 'brown';;
});
btn[2].addEventListener('mouseup', function() { 
    body.style.background = 'none';
});

link.addEventListener('mouseenter', function() { 
    body.style.background = 'yellow';
});
link.addEventListener('mouseleave', function() { 
    body.style.background = 'none';
});