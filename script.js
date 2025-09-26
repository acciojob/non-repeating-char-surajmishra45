function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with count 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character is found
    return null;
}

// Example usage
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
