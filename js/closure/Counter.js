// 想像一下，你正在開發一個追蹤不同指標的項目。我們需要一個計數器功能，但它比一般的計數器更複雜一點。請設計一個名為 createCounter 的函數，它可以選項性地接受一個起始值作為參數。這個函數應該返回一個新的函數。
// 當你第一次調用這個新函數時，它會根據你是否提供了起始值，而傳回起始值或預設的 0。巧妙的是，任何之後的調用都會比前一次的返回值增加 1。請注意，我們希望這種行為封装在這個函數中。

// 初始化沒傳入
// const counter = createCounter();
// counter(); // 0
// counter(); // 1
// counter(); // 2

// 初始化傳入 10
// const counter = createCounter(10);
// counter(); // 10
// counter(); // 11
// counter(); // 12

function createCounter(initValue = 0) {
  let counter = initValue;
  return function () {
    // number ++ 會先回傳 number 再 +1
    // number +=1 會先 +1 再回傳 number
    return counter++;
  };
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
