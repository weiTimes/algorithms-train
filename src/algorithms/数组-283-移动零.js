/*
 * @Author: yewei
 * @Date: 2020-10-28 14:36:34
 * @Last Modified by:   yewei
 * @Last Modified time: 2020-10-28 14:36:34
 *
 *  +1
 *  +1
 *  +1
 */

// 解法1
// var moveZeroes = function (nums) {
//   var j = 0;

//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[j++] = nums[i];
//     }
//   }

//   while (j < nums.length) {
//     nums[j++] = 0;
//   }
// };

// 解法2
// var moveZeroes = function (nums) {
//   var j = 0;

//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[j] = nums[i];
//       if (i !== j) {
//         nums[i] = 0;
//       }
//       j++;
//     }
//   }
// };

// 解法3
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j++] = tmp;
    }
  }

  console.log(nums, 'nums');
};

moveZeroes([0, 1, 0, 3, 12]);
