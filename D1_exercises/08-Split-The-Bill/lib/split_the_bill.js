const splitTheBill = (group) => {
  // TODO: implement the method and return a hash
  var result = {};
  var sum = 0;

  for (var key in group) {
    sum += group[key];
  }
  
  var avg = sum / (Object.keys(group).length);
  
  for (var person in group) {
    result[person] = Math.floor(100 * (group[person] - avg))/100;
  }
  return result;
};

module.exports = splitTheBill; // Do not remove this line.
