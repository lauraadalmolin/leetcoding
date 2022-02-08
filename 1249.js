var minRemoveToMakeValid = function(s) {
    
    const arr = s.split('');
    const parenthesisStack = [];
    
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        
        if (char !== ')' && char !== '(') continue;
        
        if (char === '(') {
            parenthesisStack.push([i]);
            continue;
        }
               
        const lastParenthesis = parenthesisStack[parenthesisStack.length - 1];
        
        if (lastParenthesis === undefined || lastParenthesis === null) {
            arr[i] = '*';
            continue;
        }
        
        parenthesisStack.pop();
    }
    
    for (const index of parenthesisStack) {
        arr[index] = '*';
    }
    
    return arr.join('').replaceAll('*', '');
   
};