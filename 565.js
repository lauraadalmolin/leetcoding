// the big thing to realize in this problem is that
// each element can belong to one loop and one loop only
// given that fact, we just have to find all the loops (O(n)),
// and get the biggest one ;)

const arrayNesting = function (nums) {
  let max_overall = 0;

  for (let i = 0; i < nums.length; i++) {
    let max = 0;
    let next_index = i;

    while (nums[next_index] >= 0) {
      const next_num = nums[next_index];
      nums[next_index] = -1;
      next_index = next_num;
      max++;
    }

    max_overall = Math.max(max, max_overall);
  };

  return max_overall;
};
