let list = document.querySelector('ul#list');

console.log(`
${list.firstElementChild.innerHTML},
${list.lastElementChild.innerHTML},
${list.firstElementChild.nextElementSibling.innerHTML},
${list.lastElementChild.previousElementSibling.innerHTML}
${list.firstElementChild.nextElementSibling.nextElementSibling.innerHTML}
`);