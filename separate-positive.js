// add whatever parameters you deem necessary
function separatePositive(arr) { 
    let start = 0;
    let end = arr.length - 1;

    while( start < end) {
        if (arr[start] < 0 && arr[end] > 0) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        } else {
        if (arr[start] > 0) start += 1;
        else end -= 1;
      }
    }
    return arr;
}
