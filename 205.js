var isIsomorphic = function(s, t) {
    
    const char_map = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const a = s[i];
        const b = t[i];
        
        if (!char_map.has(a)) {
            char_map.set(a, b);
            continue;
        }
        
        if (char_map.get(a) !== b) {
            return false;
        }
    }
    
    const num_of_unique_chars = new Set([...char_map.values()]).size; 
    const total_num_of_mappings = char_map.size;
    
    // the total number of mappings must be equal to the number
    // of unique chars, so that there are no duplicated mappings
    // meaning: a -> b and c -> b would be a falsy value
    return num_of_unique_chars == total_num_of_mappings;
    
};