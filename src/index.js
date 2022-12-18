module.exports = function reverse (n) {
   n = Math.abs(n);
   let arr = String(n);
   return arr.split("").reverse().join("");
}
