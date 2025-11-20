function frequencySort(nums) {
    const freqMap = {};

    // Count frequency of each number
    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // Sort array based on frequency and value
    return nums.sort((a, b) => {
        if (freqMap[a] !== freqMap[b]) {
            return freqMap[a] - freqMap[b]; // increasing frequency
        } else {
            return b - a; // decreasing value if same frequency
        }
    });
}
