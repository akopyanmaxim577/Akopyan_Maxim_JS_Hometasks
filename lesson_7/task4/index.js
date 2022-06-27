document.querySelector('.btn').addEventListener('click', function () {
    let users = document.getElementById('select');
    users.remove(users.selectedIndex);
});