/* complex_code.js */

// This code demonstrates a complex algorithm for generating a custom calendar
// It takes into account leap years, different month lengths, and allows customization
// by specifying the start date and the number of months to generate

function generateCustomCalendar(startDate, numMonths) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const numDaysInMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
  };

  let currentDate = new Date(startDate);
  let calendar = [];

  for (let i = 0; i < numMonths; i++) {
    const currentMonth = monthNames[currentDate.getMonth()];
    const numDays = getNumDaysInMonth(currentMonth, currentDate.getFullYear());

    let monthObj = {
      month: currentMonth,
      year: currentDate.getFullYear(),
      days: []
    };

    for (let j = 1; j <= numDays; j++) {
      let dayObj = {
        day: j,
        events: []
      };

      monthObj.days.push(dayObj);
    }

    calendar.push(monthObj);

    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return calendar;
}

function getNumDaysInMonth(month, year) {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  const numDays = numDaysInMonth[month];

  return (month === "February" && isLeapYear) ? numDays + 1 : numDays;
}

// Usage example:

const startDate = "2022-01-01"; // Specify the start date as YYYY-MM-DD format
const numMonths = 12; // Generate a calendar for 12 months starting from the start date

const customCalendar = generateCustomCalendar(startDate, numMonths);
console.log(customCalendar);
// Output: an array of month objects with corresponding days and events for each day
// [
//   {
//     month: "January",
//     year: 2022,
//     days: [
//       {
//         day: 1,
//         events: []
//       },
//       ...
//     ]
//   },
//   ...
// ]