const isValid = function(str) {
  const stack = [];

  const charMap = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);

  for (const currChar of str) {
    const opposite = charMap.get(currChar);
    
    if (opposite) {
      stack.push(opposite);
      continue;
    } 
    
    const lastChar = stack.pop();
    if (currChar !== lastChar) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid('()[]{}'));

