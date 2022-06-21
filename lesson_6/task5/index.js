const h1Elem = document.querySelector("h1");
h1Elem.style.fontSize = "18px";
h1Elem.style.backgroundColor = "#7CFC00";
h1Elem.style.fontWeight = "bolder";

const firstParagraph = document.querySelector("div#myDiv").firstElementChild;
firstParagraph.style.fontWeight = "bold";

const secondParagraph = document.querySelector("div#myDiv").firstElementChild.nextElementSibling;
secondParagraph.style.color = "#FF0000";

const thirdParagraph = document.querySelector("div#myDiv").lastElementChild.previousElementSibling;
thirdParagraph.style.textDecoration = "underline";

const fourthParagraph = document.querySelector("div#myDiv").lastElementChild;
fourthParagraph.style.fontStyle = "italic";

const horizontalList = document.querySelector("ul#myList");
horizontalList.style.display = "flex";

const horizontalListItems = document.querySelectorAll("ul#myList>li");
horizontalListItems.forEach(e => {
    e.style.display = "inline";
}
);


const hiddenSpan = document.querySelector("span");
hiddenSpan.style.display = "none";