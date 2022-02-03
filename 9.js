const isPalindrome = function (x) {
  if (x < 0) return false;

  let reverse = 0;
  let original = x;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reverse;
};


console.log(isPalindrome(1))