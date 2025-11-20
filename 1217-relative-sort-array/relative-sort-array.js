function relativeSortArray(arr1, arr2) {
    const freqMap = {};

    // Count frequency of each number in arr1
    for (let num of arr1) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    const result = [];

    // Add elements in arr2 order
    for (let num of arr2) {
        for (let i = 0; i < freqMap[num]; i++) {
            result.push(num);
        }
        delete freqMap[num]; // Remove processed number
    }

    // Add remaining elements not in arr2, sorted ascending
    const remaining = Object.keys(freqMap)
        .map(Number)
        .sort((a, b) => a - b);

    for (let num of remaining) {
        for (let i = 0; i < freqMap[num]; i++) {
            result.push(num);
        }
    }

    return result;
}
