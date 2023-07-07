function findCombinations(nums, target) {
    const result = [];
  
    // Iterate through the array to find pairs
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        // Check if the pair's sum equals the target value
        if (nums[i] + nums[j] === target) {
          // Add the pair to the result array
          result.push([nums[i], nums[j]]);
        }
      }
    }
  
    return result;
  }
  console.log(findCombinations)
  
  // Test with sample input
  const nums = [1, 3, 2, 2, -4, -6, -2, 8];
  const target = 4;
  
  const combination = findCombinations(nums, target);
  console.log("Combinations:", combination);
  
  //mergerd arrays//
  
  function mergeArrays(nums) {
      // Flatten the nested arrays
      const flattenedArray = nums.flat();
    
      // Sort the flattened array in ascending order
      const mergedArray = flattenedArray.sort((a, b) => a - b);
    
      return mergedArray;
    }
    
    // Test with the sample input
    const inputArray = [[1, 3], [2, 2], [-4, 8], [-6, 2]];
    const mergedArray1 = mergeArrays(inputArray);
    console.log("Merged Array:", mergedArray1);
  
  
    //second combination for 8//
    function findCombinations(nums, doubledTarget) {
      const result = [];
    
      for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
          const combination = nums.slice(i, j + 1);
          if (combination.reduce((sum, num) => sum + num, 0) === doubledTarget) {
            result.push(combination);
          }
        }
      }
    
      return result;
    }
    
  //   Test with the sample input
    function findCombinations(nums, doubledTarget) {
      const result = [];
    
      for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
          const combination = nums.slice(i, j + 1);
          if (combination.reduce((sum, num) => sum + num, 0) === doubledTarget) {
            result.push(combination);
          }
        }
      }
    
      return result;
    }
    const mergedArray = [-6, -4, 1, 2, 2, 2, 3, 8];
    const doubledTargetValue = 8;
    
    const combinations = findCombinations(mergedArray, doubledTargetValue);
    console.log("Combinations for 8:", combinations);
  