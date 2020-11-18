/*
 * @Author: yewei
 * @Date: 2020-10-28 14:36:18
 * @Last Modified by: yewei
 * @Last Modified time: 2020-10-28 14:36:52
 *
 *  +1
 *  +1
 *  +1
 */

// 解法一
// 找重复
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }

  var array = [0, 1, 2];

  for (var i = 3; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }

  return array[n];
};

/**  解法二
 *
 *
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }

  var oneStepBefore = 1; // 第一步时的数量
  var twoStepBefore = 2; // 第二步时的数量
  var all = 0; // 下一步的数量

  // 遍历到最后，all是第n布的数量
  for (var i = 3; i <= n; i++) {
    all = oneStepBefore + twoStepBefore; // current = dp(1) + dp(2)
    oneStepBefore = twoStepBefore; // dp(1) 变成了当前的dp(2)
    twoStepBefore = all; // dp(2) 变成了当前，即dp(3) -> 下一次如果循环进来，就是dp(4) = dp(3) + dp(2);
  }

  return all;
};
