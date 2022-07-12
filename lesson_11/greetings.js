let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function(name){
    let hour = currentDate.getHours();
    if(hour >= 5 && hour <= 10)
        return "Good morning, " + name;
    else if(hour > 10 && hour <= 17)
        return "Good day, " + name;
    else
        return "Good evening, " + name;
}