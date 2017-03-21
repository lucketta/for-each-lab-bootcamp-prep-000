var iterativeLog = array => {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

var iterate = callback => {
  var newArray = ["Hello"];
  newArray.forEach(callback);
  return newArray;
}

var doToArray = (array, callback) => {
  array.forEach(callback);
}
