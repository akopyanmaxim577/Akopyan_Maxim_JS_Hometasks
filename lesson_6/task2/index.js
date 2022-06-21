let image = document.querySelector('img.image');

console.log(`IMG path ${image.src}`);

image.src = 'cat.jpg';
alert(`New image: ${image.src}`);