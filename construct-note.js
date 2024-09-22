// add whatever parameters you deem necessary

function createFrequencyCounter(str) {
    const frequencies = new Map();
    for (let char of str) {
        let valCount = frequencies.get(char) || 0;
        frequencies.set(char, valCount + 1)
    }
    return frequencies;
}

function constructNote(str1, str2) {
    //checks if all character of str1 are in str2
    //str2 can have extra characters as long as str1's are str2
    const str1Map = createFrequencyCounter(str1);
    const str2Map = createFrequencyCounter(str2);
    //map str1 and str2 to create count for each character in str1 and str2
    //use for loop to check each key in str1 map and verify that key's value in str2 is greater or equal, if false at any point return false, otherwise return true if function makes it out of for loop
    for(let char of str1Map.keys()) {
        if(str2Map.get(char) === undefined) return false;
        if(str1Map.get(char) > str2Map.get(char)) return false;
    }
    return true;
}

