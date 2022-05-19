let hour = prompt("Введіть кол-во годин");
let day = prompt("Введіть кол-во днів");
let month = prompt("Введіть кол-во місяців");

let sec_h = 3600 * hour;
let sec_d = 86400 * day;
let sec_m = 2629744 * month;

alert(`Секунд в часах ${sec_h},секунд в днях ${sec_d},секунд в місяцях ${sec_m}`);
