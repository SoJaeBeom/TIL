function solution(str1, str2) {
  var answer = 1;

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  var arr1 = [];
  var arr2 = [];

  for (var i = 0; i < str1.length - 1; i++) {
    var tmp = str1.slice(i, i + 2);
    if (tmp.search(/[^A-Z]/g) >= 0) {
      continue;
    }
    arr1.push(tmp);
  }
  for (var i = 0; i < str2.length - 1; i++) {
    var tmp = str2.slice(i, i + 2);
    if (tmp.search(/[^A-Z]/g) >= 0) {
      continue;
    }
    arr2.push(tmp);
  }

  arr1.sort();
  arr2.sort();

  var a = [];
  var b = [];

  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      a.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
    }
    b.push(arr2[i]);
  }

  for (var i = 0; i < arr1.length; i++) {
    b.push(arr1[i]);
  }

  if (b.length === 0) return 65536;
  if (a.length === 0) return 0;

  return Math.floor((a.length / b.length) * 65536);
}

console.log(solution('FRANCE', 'french'));
console.log(solution('handshake', 'shake hands'));
console.log(solution('aa1+aa2', 'AAAA12'));
console.log(solution('E=M*C^2', 'e=m*c^2'));
