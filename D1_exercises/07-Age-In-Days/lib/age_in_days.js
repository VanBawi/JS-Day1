const ageInDays = (day, month, year) => {
  // TODO: Implement the method and return an integer
var DOB = "1, 1, 2000";
var millenialDOB = Date.parse(DOB);
var millenialNow = Date.now();
var millenialExpectedDays = millenialNow - millenialDOB;


//convertion dates to respective times
  var currentYear = millenialExpectedDays;
  var day = hour*24;
  var month = day*30; 
  var year = day*365;

var years = Math.round(currentYear/year);
var months = years*12;
var days = years*365;

function myFunction(){
  var ans = days + months + years;{
    return ans;}
}


};

module.exports = ageInDays; // Do not remove. We need this for the spec to know about your method.
