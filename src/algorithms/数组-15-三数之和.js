/**
 * @param {number[]} nums
 * @return {number[][]}
 *  1. 排序 + 双指针
 *  2. O(n^2)
 */
var threeSum = function (nums) {
  var res = [];
  var length = nums.length;

  if (!res || length < 3) return res;

  nums.sort((a, b) => a - b);

  for (var i = 0; i < length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    var l = i + 1;
    var r = length - 1;

    while (l < r) {
      var sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      }
    }
  }

  return res;
};
