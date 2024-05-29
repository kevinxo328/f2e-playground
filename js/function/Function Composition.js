// 給定一個函式陣列 [f1, f2, f3, ... fn]，回傳一個新的函式 fn，它是該陣列中函式的組合。

// 函式組合的定義是，如果函式陣列為 [f(x), g(x), h(x)] ，則 fn(x) = f(g(h(x)))。空函式陣列的函式組合則為恆等函式 f(x) = x。

// 你可以假設陣列中的每個函式都接受一個整數作為輸入，並回傳一個整數作為輸出。

// // 範例一
// 輸入: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// 輸出: 65
// 解說:
// 從右到左
// 初始的 x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

// // 範例二
// 輸入: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// 輸出: 1000
// 解說:
// 從右到左
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000

function composition(fns, arg) {
  let result = arg;
  for (let i = 0; i < fns.length; i++) {
    result = fns[fns.length - 1 - i](result);
  }

  return result;
}

functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

console.log(composition(functions, 4));
