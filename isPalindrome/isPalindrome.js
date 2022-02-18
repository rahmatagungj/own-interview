// solution 1
function isPalindrome(str){
  return str == str.split('').reverse().join('');
}

exports.isPalindrome = isPalindrome