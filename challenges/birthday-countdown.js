/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

function daysUntilDate(str){
  var today = Date.now();
  var otherDate = Date.parse(str);
  var dayCount = otherDate - today;
  var days = dayCount/(8.64*Math.pow(10,7));
  return Math.round(days);
}

birthdayReminder([
  {
    name: "Jack",
    dob: "10/31/2013"
  },
  {
    name: "Jill",
    dob: "4/01/1975"
  }
]);

function birthdayReminder(arr){
  var bdayArr = [];
  // var sortedObject = {};
  arr.forEach(function(object){
    var days = daysUntilDate(birthdays(object.dob));
    bdayArr.push(object.name + "'s birthday is in " + days + " days");
    // sortedObject[object.name] = days;
  })
  return bdayArr;
}

function birthdays(str) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var mmdd = [mm,dd];
  var dob = str.split('/');
  dob.pop();
  if (dob[0] <= mmdd[0]) {
    dob.push('2017');
  } else {
    dob.push('2016');
  }
  var finalDate = dob.join('/');
  return finalDate;
}
