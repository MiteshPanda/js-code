// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);  //OBJECT

// let myCreatedDate = new Date(2028, 3, 19)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.getTime());

// let myMoreDates = new Date(2030, 1, 5, 12, 12, 7)
// console.log(myMoreDates.toLocaleString());

// let myDates = new Date("2028-06-23")
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());

// let newDateFormat = new Date("06-23-2028")
// console.log(newDateFormat.toLocaleString());
// console.log(newDateFormat.toDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(Math.round(Date.now()/1000)); // to convert mili-second to seconds.
// console.log(Math.floor(Date.now()/1000)); // to convert mili-second to seconds.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); //starts from 0 => January, 1=> February, 2 => March ...
console.log(newDate.getMonth() + 1); // to avoid confusing of 0 - indexing

console.log(newDate.getDay()); //starts from 0 => Sunday, 1=> Monday, 2 => Tuesday ...
console.log(newDate.getDay() + 1); //// to avoid confusing of 0 - indexing


newDate.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'Australia/Darwin'
})

console.log(newDate);