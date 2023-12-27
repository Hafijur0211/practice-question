// solution 1

var str = "Hafijur Rahman";

var savedStr = str.split(" ").map(function (word) {
  return word.split("").reverse().join("");
});

console.log(savedStr.join(" "));
