// Objective remove duplicates
function removeDuplicates(arr) {
    // Create empty array to push results
    const resultArr = []
    // Loop through array
    for (let a of array) {
        // Conditional logic to find itemName
        if (a.itemName === 'pencil') {
            arr.shift(a.itemName);
        }
    }
    return arr;
}

const array = [
    { id: 1, itemName: 'pencil', price: 2.99 },
    { id: 1, itemName: 'pencil', price: 3.99 },
    { id: 2, itemName: 'eraser', price: 1.99 },
    ]
    
console.log(removeDuplicates(array));