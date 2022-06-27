let newWindow = open('/', 'example', 'width=300,height=300');

newWindow.onload = setTimeout(function() {
    newWindow.resizeTo(500, 500);
}, 2000);
setTimeout(newWindow);

newWindow.onload = setTimeout(function() {
    newWindow.moveTo(200, 200);
}, 4000);
setTimeout(newWindow);

newWindow.onload = setTimeout(function() {
    newWindow.close();
}, 6000);
setTimeout(newWindow);