function countVowels(str) {
    // Create an array of vowels   
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const s = str.split(''); // Split the string into an array of characters
    let count = 0; // Initialize a counter for the number of vowels

    // Iterate through the array of characters and check if each character is a vowel
    for (let i = 0; i < vowels.length; i++) {
        for (let j = 0; j < s.length; j++) {
            
        if (vowels[i] === s[j]) {
            count++; // Increment the counter if the character is a vowel
    }
    }
}

    return count; // Return the total number of vowels
    }

// Example usage:
console.log(countVowels("")); // Output: 3




