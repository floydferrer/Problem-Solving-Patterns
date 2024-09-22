// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    /**creates object keys using each value in arr1 and object
     * values using the values in arr2. Stop when all values in
     * arr1 are used. If arr2 is smaller, assign null to remaining
     * values
     */ 
    const result = {}; //create result object
    //iterate through arr1 to assign result.keys and shift values from arr2 to assign result.values
    for (let val of arr1) {
        if (arr2.length > 0) {
            result[val] = arr2.shift();
        } else result[val] = null;
    }
    return result;
}

