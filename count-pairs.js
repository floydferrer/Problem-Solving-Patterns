// add whatever parameters you deem necessary
function countPairs(arr, num) {
    //count amount of pairs in arr of unique integers with sum === to num
    arr.sort((a, b) => a - b) //sort array
    let sumCount = 0; //create sum counter
    let left = 0; //create left pointer
    let right = arr.length - 1; //create right pointer
    /**
     * check sum of values in arr index of left and right. if sum
     * === num, plus up sumCount, move left counter up, move right
     * counter down. if sum is smaller than num, move left pointer
     * up. otherwise (sum is larger than num), move right pointer
     * down. continue until left pointer is larger than right
     */
    while(left < right) {
        const sum = arr[left] + arr[right]
        if (sum === num) {
            sumCount++;
            left++;
            right--;
        } else if (sum < num) {
            left++;
        } else {
            right--;
        }
    }
    return sumCount;

}
