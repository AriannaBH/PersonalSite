var currentDate = new Date(); 
console.log('Current date: ' + currentDate);

var currentYear = currentDate.getFullYear();
console.log("Current year: " + currentYear);

var copyright = document.getElementById("copyright");
copyright.textContent = currentYear;

