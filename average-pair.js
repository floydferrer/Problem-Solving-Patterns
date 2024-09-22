// add whatever parameters you deem necessary
function averagePair(arr1, avg) { //accepts sorted integer array and float (avg)
    //loop through sorted array until two integers' avg matches avg
    //sum of both integers must = avg * 2
    //two pointers at both ends of sorted array
    //if sum is higher than avg * 2, move end pointer left
    //if sum is lower than avg *2, move end pointer right
    let start = 0;
    let end = arr1.length - 1;
    while(start < end) { //if sum = avg * 2 is found
        if((arr1[start] + arr1[end]) / 2 > avg) {
            end--;
        } else if((arr1[start] + arr1[end]) / 2 < avg) {
            start++;
        } else {
            return true;
        }
    }
    return false //if loop is completed return false
}
