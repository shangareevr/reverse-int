module.exports = function reverse(string) {
  const number = Math.abs(string);
  const arr = String(number);
  return arr.split('').reverse().join('');
};
