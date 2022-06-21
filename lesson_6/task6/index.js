const firstInput = prompt('Please enter first value');
document.querySelector('input#input1').value = firstInput;

const secondInput = prompt('Please enter second value');
document.querySelector('input#input2').value = secondInput;

debugger;

swapInputs(firstInput, secondInput);


function swapInputs(first, second) {
    document.querySelector('input#input1').value = second;
    document.querySelector('input#input2').value = first;
}