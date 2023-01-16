const tail = function(array) {
  // let output = [];
  // for (let i = 1; i < array.length; i++) {
  //   output.push(array[i]);
  // }
  // return output;
  return array.slice(1)
};

module.exports = tail;