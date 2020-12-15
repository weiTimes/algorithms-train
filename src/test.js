var groupAnagrams = function (strs) {
  var hashTable = new Map();
  var result = [];

  for (var i = 0; i < strs.length; i++) {
    var str = [...strs[i]].sort().join('');
    if (hashTable.has(str)) {
      hashTable.get(str).push(strs[i]);
    } else {
      hashTable.set(str, [strs[i]]);
    }
  }

  for (const item of hashTable.values()) {
    if (item.length > 0) {
      result.push(item);
    }
  }

  return result;
};

const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
console.log(result);
