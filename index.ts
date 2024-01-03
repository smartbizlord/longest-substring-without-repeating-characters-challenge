/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s: string): number {
    let maxLength: number = 0;
    let start: number = 0;
    const charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If the character is already in the substring, move the start pointer
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }

        // Update the character's index in the map
        charIndexMap[char] = end;

        // Update the maximum length if needed
        maxLength = Math.max(maxLength, ((end - start) + 1));
    }

    return maxLength;
}

