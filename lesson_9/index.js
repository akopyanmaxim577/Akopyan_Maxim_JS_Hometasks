/// ======== Task 1 ========== ///
$("a[href^='https:/']").attr('target', '_blank');

/// ======== Task 2 ========== ///

$("h2.head").css('background-color', 'green');
$("h2.head>.inner").css('fontSize', '35px');

/// ======== Task 3 ========== /// 

$("h3+div").each((i, element) => {
    $(element).insertBefore($(element).prev());
});

/// ======== Task 4 ========== /// 

document.addEventListener("change", function (event) {

    if (event.target.checked == false) {
        document.querySelector("input#" + event.target.id).removeAttribute('checked');
    } else {
        document.querySelector("input#" + event.target.id).setAttribute('checked', 'checked');
    }

    let checkedCheckboxes = $("input[checked='checked']").length;

    if(checkedCheckboxes >= 3){

        $('input').each((i, element) => {
            $(element).attr('disabled', 'disabled');
        });
    }
});