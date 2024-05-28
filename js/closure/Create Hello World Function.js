// 實作一個叫 createHelloWorld 的函式，該函式會返回一個新的函式，新的函式會永遠返回 Hello World 字串。

// 範例一
// 輸入: args = []
// 輸出: "Hello World"
// 解說:
// const f = createHelloWorld();
// f(); // "Hello World"

// 範例二
// 輸入: args = [{},null,42]
// 輸出: "Hello World"
// 解說:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

function createHelloWorld() {
  return function () {
    return "Hello World";
  };
}

const f = createHelloWorld();
console.log(f());
