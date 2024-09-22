// add whatever parameters you deem necessary
function createFrequencyCounter(num) { //map creator
    const frequencies = new Map();
    for (let digit of num.toString().split('')) {
        let valCount = frequencies.get(digit) || 0;
        frequencies.set(digit, valCount + 1)
    }
    return frequencies;
}

function sameFrequency(num1, num2) {
    /** check for same frequency of each digit
     * create map for each num
     * confirm length of each map is equal
     * iterate through keys of num1 map and check for same key and value in map2
     * return false if any key/value pair is not matched
     * if iteration loop is completed, return true 
    */ 
    if(num1.toString().length !== num2.toString().length) return false
    const num1Map = createFrequencyCounter(num1);
    const num2Map = createFrequencyCounter(num2);

    if(num1Map.size !== num2Map.size) return false
    for (let key of num1Map.keys()) {
        if(num1Map.get(key) !== num2Map.get(key)) return false 
    }
    return true;
}

