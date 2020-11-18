/*
 * @Author: yewei
 * @Date: 2020-10-28 14:35:41
 * @Last Modified by: yewei
 * @Last Modified time: 2020-10-28 14:36:59
 *
 *  +1
 *  +1
 *  +1
 *  +1
 */

/**
 *  解法一
 *  两层遍历
 */
var twoSum = function (nums, target) {
  var array = [];

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        array[0] = i;
        array[1] = j;
      }
    }
  }

  return array;
};

/**
 *  解法二
 *  哈希表
 */
var twoSum = function (nums, target) {
  var hashMap = {};

  for (var i = 0; i < nums.length; i++) {
    var num = target - nums[i];
    if (hashMap[num] !== undefined) {
      return [hashMap[num], i];
    }

    hashMap[nums[i]] = i;
  }
};
