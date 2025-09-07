const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
let sortedStudantReport = [...studentReport].sort();

// 1. Write a for loop that will iterate through the studentReport array and
// print to the console the current array value if it is below 30.

console.log("FOR LOOP");

for (let index = 0; index < sortedStudantReport.length; index++) {
    let studant = sortedStudantReport[index];
    if (studant < LIMIT) {
        console.log(studant);
    } else {
        break;
    }
};

// 2. Repeat the previous programming snippet by using a while loop.

console.log("WHILE LOOP");

let index = 0;

while (index < sortedStudantReport.length) {
    let studant = sortedStudantReport[index];
    if (studant < LIMIT) {
        console.log(studant);
    } else {
        break;
    };
    index++;
}

// 3. Repeat the previous programming snippet by using a forEach loop.

console.log("FOR EACH LOOP");

sortedStudantReport.forEach(studant => {
    if (studant < LIMIT) {
        console.log(studant);
    };
});

// 4. Repeat the previous programming snippet by using a for...in loop.

console.log("FOR IN LOOP");

for (index in sortedStudantReport) {
    let studant = sortedStudantReport[index];
    if (studant < LIMIT) {
        console.log(studant);
    } else {
        break;
    };
};


// 5. Use any type of repetition (looping) statement to dynamically produce the
// day names (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.

console.log("FUTURE DAYS OF THE WEEK");

const DAYS = 6;
const today = new Date();
const options = { weekday: 'long'};

const weekdayNumber = today.getDay();
const todayString = new Intl.DateTimeFormat("en-US", options).format(today);

console.log(`Day of the week: ${weekdayNumber}`);
console.log(`Today is ${todayString}`);
console.log("Next days of the week");

for (let index = 1; index <= DAYS; index++) {
    let nextDay = new Date();
    nextDay.setDate(weekdayNumber + index);
    let nextDayString = new Intl.DateTimeFormat("en-US", options).format(nextDay);
    console.log(nextDayString);
};
