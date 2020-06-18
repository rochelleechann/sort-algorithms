console.log('\nHello Brian, welcome to my quick program.\nThis is to demonostrate merge sort algorithm.');

function splitArray(arr) {
    debugger;
    // Checking if array if split into each single element
    if (arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(splitArray(left), splitArray(right));
}

function merge(leftArr, rightArr) {
    debugger;
    let leftIndex = 0;
    let rightIndex = 0;
    const sortedArr = [];

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            sortedArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            sortedArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }
    return sortedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

const input = [7, 8, 9, 2, 3, 4, 1, 5, 6];
console.log('Input:', input);
console.log('Results:', splitArray(input));