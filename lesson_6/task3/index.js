let textDiv = document.querySelectorAll('div#text > p');

for( let i = 0; i < textDiv.length; i += 1){
    console.log(`Selector text ${i} : ${textDiv[i].innerHTML}`);
}