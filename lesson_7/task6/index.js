
window.addEventListener("resize", function(){
    const textElement = document.querySelector("p#text1");
    console.log("CAPTURED)");
    textElement.innerHTML = `Width: ${window.innerWidth} + Height: ${window.innerHeight}`;
});