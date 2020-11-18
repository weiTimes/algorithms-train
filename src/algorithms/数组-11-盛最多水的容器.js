/*
 * @Author: yewei
 * @Date: 2020-10-28 14:36:06
 * @Last Modified by: yewei
 * @Last Modified time: 2020-10-28 14:36:56
 *
 *  +1
 *  +1
 *  +1
 */

// 解法一
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var max = 0;

  for (var i = 0; i < height.length - 1; i++) {
    for (var j = i + 1; j < height.length; j++) {
      var area = (j - i) * Math.min(height[i], height[j]);
      max = Math.max(max, area);
    }
  }

  return max;
};

// 解法二
// 双指针：两个指针分别指向头和尾，哪个小移动哪个，内敛
var maxArea = function (height) {
  var i = 0;
  var j = height.length - 1;
  var max = 0;
  while (i < j) {
    max = Math.max(
      max,
      (j - i) * (height[i] > height[j] ? height[j--] : height[i++])
    );
  }
  return max;
};
