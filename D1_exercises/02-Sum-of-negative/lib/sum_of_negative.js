const sumOfNegative = (numbers) => {
  var negative =[]
  var sum = 0
  numbers.forEach(function(num1){
    if (num1 < 0){
      negative.push(num1)}
  });

  negative.forEach(function(num2){
    sum += num2;
  });
  return sum;
  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
};


module.exports = sumOfNegative; // Do not remove.
