console.log('\nHello Brian, welcome to my quick program.\nThis is to demonostrate insertion sort algorithm.');

function insertionSort(arr) {
    for (let index = 1; index < arr.length; index++) {
        let currentValue = arr[index];
        let indexBeforeCurrent = index - 1;

        while(indexBeforeCurrent >= 0 && arr[indexBeforeCurrent] > currentValue) {
            // Shifts element we checked one time to the right
            arr[indexBeforeCurrent + 1] = arr[indexBeforeCurrent];
            // Decrement in order to examine the previous element
            indexBeforeCurrent--;
        }
        // Swap arr index into the correct position 
        arr[indexBeforeCurrent + 1] = currentValue;
    }
    return arr;
}


const input = [7, 8, 9, 2, 3, 4, 1, 5, 6];

console.log('Input:', input);
console.log('Results:', insertionSort(input));