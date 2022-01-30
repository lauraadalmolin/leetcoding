const twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let k = target - nums[i];

    if (map.has(k)) {
      return [map.get(k), i];
    } else {
      map.set(nums[i], i);
    }
  }
  
};
