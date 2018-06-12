// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

function checkPal() {
  return palindrome("feet 👣 teef");
}

function emailParts(string) {
  let processedContent = string.toLowerCase();
  return processedContent.split("@");
}