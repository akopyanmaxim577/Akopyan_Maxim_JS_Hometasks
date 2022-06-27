function changeCSS() {
    let mdsbutton = document.querySelector("button.mdsbutton");

    mdsbutton.addEventListener("click", function () {
        let pText = document.querySelector("p#text");
        pText.style.fontSize = '20';
        pText.style.fontFamily = 'Comic Sans MS';
        pText.style.color = '#FFBF00';
    });
}

changeCSS();