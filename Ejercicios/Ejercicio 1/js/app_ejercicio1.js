const date = new Date();

console.log("Today is", date);

const getDays = (year, month) => new Date(year, month, 0).getDate();

const days = getDays(2024, 4);
console.log("There are", days, "days in the current month of the course.");
