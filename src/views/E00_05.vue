<template>
  <div class="epage">
    <h1>第00章-05章</h1>
    <h2>02.let和const</h2>
    <section>
      <div
        class="code-block"
        v-for="(ec, idx) in e02"
        :key="new Date().getTime() + idx"
      >
        <pre>
          <code class="language-javascript">
          {{ec }}
        </code>
        </pre>
      </div>
    </section>
    <h2>03.变量的解构赋值</h2>
    <section>
      <div
        class="code-block"
        v-for="(ec, idx) in e03"
        :key="new Date().getTime() + idx"
      >
        <pre>
          <code class="language-javascript">
          {{ec }}
        </code>
        </pre>
      </div>
    </section>
    <h2>04.字符串的扩展</h2>
    <section>
      <div
        class="code-block"
        v-for="(ec, idx) in e04"
        :key="new Date().getTime() + idx"
      >
        <pre>
          <code class="language-javascript">
          {{ec }}
        </code>
        </pre>
      </div>
    </section>
    <h2>05.字符串的新增方法</h2>
    <section>
      <div
        class="code-block"
        v-for="(ec, idx) in e05"
        :key="new Date().getTime() + idx"
      >
        <pre>
          <code class="language-javascript">
          {{ec }}
        </code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  data: function() {
    return {
      e02: [
        `
      // 老问题，希望的输出跟实际不一致
      var a = [];
      for (var i = 0; i < 10; i++) {
        a[i] = function () {
          console.log(i); // 希望按照0，1，2...来输出
        };
      }
      a[6](); // 10
      `,
        `
      // let解决了上面的问题
      var a = [];
      for (let i = 0; i < 10; i++) {
        a[i] = function () {
          console.log(i);
        };
      }
      a[6](); // 6`,
        `
      // 块级作用域问题
      // ES5下函数f会被提升到函数头部，ES6不会
      function f() { console.log('I am outside!'); }

      (function () {
        if (false) {
          // 重复声明一次函数f
          function f() { console.log('I am inside!'); }
        }

        f();
      }());
      `,
        `
      // ES6 的块级作用域必须有大括号，
      // 如果没有大括号，JavaScript 引擎就认为不存在块级作用域

      // 第一种写法，报错
      if (true) let x = 1;

      // 第二种写法，不报错
      if (true) {
        let x = 1;
      }
      `,
        `
      // 将对象彻底冻结的函数
      var constantize = (obj) => {
        Object.freeze(obj);
        Object.keys(obj).forEach( (key, i) => {
          if ( typeof obj[key] === 'object' ) {
            constantize( obj[key] );
          }
        });
      };
      `,
        `
      // ES6开始，全局变量将逐步与顶层对象的属性脱钩

      var a = 1;
      // 如果在 Node 的 REPL 环境，可以写成 global.a
      // 或者采用通用方法，写成 this.a
      window.a // 1

      let b = 1;
      window.b // undefined
      `,
        `
      // 获取顶层对象的兼容写法

      // 方法一
      (typeof window !== 'undefined'
        ? window
        : (typeof process === 'object' &&
            typeof require === 'function' &&
            typeof global === 'object')
          ? global
          : this);

      // 方法二
      var getGlobal = function () {
        if (typeof self !== 'undefined') { return self; }
        if (typeof window !== 'undefined') { return window; }
        if (typeof global !== 'undefined') { return global; }
        throw new Error('unable to locate global object');
      };
      `
      ],
      e03: [
        `
        // “模式匹配”，只要等号两边的模式相同
        // 左边的变量就会被赋予对应的值

        let [foo, [[bar], baz]] = [1, [[2], 3]];
        foo // 1
        bar // 2
        baz // 3

        let [ , , third] = ["foo", "bar", "baz"];
        third // "baz"

        let [x, , y] = [1, 2, 3];
        x // 1
        y // 3

        let [head, ...tail] = [1, 2, 3, 4];
        head // 1
        tail // [2, 3, 4]

        let [x, y, ...z] = ['a'];
        x // "a"
        y // undefined
        z // []
        `,
        `
        // 等号的右边不是数组
        // 不是可遍历的结构 无Iterator接口的

        // 报错
        let [foo] = 1;
        let [foo] = false;
        let [foo] = NaN;
        let [foo] = undefined;
        let [foo] = null;
        let [foo] = {};
        `,
        `
        // ES6 内部使用严格相等运算符（===）
        // 只有当一个数组成员严格等于undefined，默认值才会生效。

        let [x = 1] = [undefined];
        x // 1

        let [x = 1] = [null];
        x // null
        `,
        `
        // 赋值循序要看好

        let [x = 1, y = x] = [];     // x=1; y=1
        let [x = 1, y = x] = [2];    // x=2; y=2
        let [x = 1, y = x] = [1, 2]; // x=1; y=2
        let [x = y, y = 1] = [];     // ReferenceError: y is not defined
        `,
        `
        // 1.交换变量的值
        let x = 1;
        let y = 2;

        [x, y] = [y, x];

        // 从函数返回多个值
        // 返回一个数组

        function example() {
          return [1, 2, 3];
        }
        let [a, b, c] = example();

        // 返回一个对象

        function example() {
          return {
            foo: 1,
            bar: 2
          };
        }
        let { foo, bar } = example();

        // 函数参数的定义
        // 参数是一组有次序的值
        function f([x, y, z]) { ... }
        f([1, 2, 3]);

        // 参数是一组无次序的值
        function f({x, y, z}) { ... }
        f({z: 3, y: 2, x: 1});

        // 提取 JSON 数据
        let jsonData = {
          id: 42,
          status: "OK",
          data: [867, 5309]
        };

        let { id, status, data: number } = jsonData;

        console.log(id, status, number);
        // 42, "OK", [867, 5309]

        // 函数参数的默认值
        jQuery.ajax = function (url, {
          async = true,
          beforeSend = function () {},
          cache = true,
          complete = function () {},
          crossDomain = false,
          global = true,
          // ... more config
        } = {}) {
          // ... do stuff
        };


        // 遍历 Map 结构
        const map = new Map();
        map.set('first', 'hello');
        map.set('second', 'world');

        for (let [key, value] of map) {
          console.log(key + " is " + value);
        }
        // first is hello
        // second is world
        // 获取键名
        for (let [key] of map) {
          // ...
        }

        // 获取键值
        for (let [,value] of map) {
          // ...
        }

        // 输入模块的指定方法
        const { SourceMapConsumer, SourceNode } = require("source-map");
        `
      ],
      e04: [
        `
      // 码点放入大括号，就能正确解读该字符
      "\u{20BB7}"
      // "𠮷"

      "\u{41}\u{42}\u{43}"
      // "ABC"

      let hello = 123;
      hell\u{6F} // 123

      '\u{1F680}' === '\uD83D\uDE80'
      // true
      `,
        `
      // 字符串的遍历器接口
      for (let codePoint of 'foo') {
        console.log(codePoint)
      }
      // "f"
      // "o"
      // "o"

      let text = String.fromCodePoint(0x20BB7);

      for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
      }
      // " "
      // " "

      for (let i of text) {
        console.log(i);
      }
      // "𠮷"
      `,
        `
      // 模板字符串（template string）是增强版的字符串，
      // 用反引号（\`）标识。它可以当作普通字符串使用，
      // 也可以用来定义多行字符串，
      // 或者在字符串中嵌入变量。

      // 普通字符串
      \`In JavaScript  is a line-feed.\`

      // 多行字符串
      \`In JavaScript this is
      not legal.\`

      console.log(\`string text line 1
      string text line 2\`);

      // 字符串中嵌入变量
      let name = "Bob", time = "today";
      \`Hello \${name}, how are you \${time}?\`

      // PS:所有的空格和缩进都会被保留在输出之中
      `,
        `
      // 标签模板”的一个重要应用，
      // 就是过滤 HTML 字符串，防止用户输入恶意内容。

      let message =
        SaferHTML\`<p>\${sender} has sent you a message.</p>\`;

      function SaferHTML(templateData) {
        let s = templateData[0];
        for (let i = 1; i < arguments.length; i++) {
          let arg = String(arguments[i]);

          // Escape special characters in the substitution.
          s += arg.replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;");

          // Don't escape special characters in the template.
          s += templateData[i];
        }
        return s;
      }
      `
      ],
      e05: [
        `
      // ES6 提供了String.fromCodePoint()方法
      // 可以识别大于0xFFFF的字符

      String.fromCodePoint(0x20BB7)
      // "𠮷"


      // 多个参数，则它们会被合并成一个字符串返回
      String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
      // true
      `,
        `
      // 返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串

      String.raw\`Hi\\n\`
      // 返回 "Hi\\\\n"

      String.raw\`Hi\\n\` === "Hi\\\\n" // true


      String.raw\`Hi\\n\${2+3}!\`
      // 实际返回 "Hi\\n5!"，显示的是转义后的结果 "Hi\\n5!"

      String.raw\`Hi\\u000A!\`;
      // 实际返回 "Hi\\u000A!"，显示的是转义后的结果 "Hi\\u000A!"
      `,
        `
      // includes()：返回布尔值，表示是否找到了参数字符串。
      // startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
      // endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。

      let s = 'Hello world!';

      s.startsWith('Hello') // true
      s.endsWith('!') // true
      s.includes('o') // true

      // 这三个方法都支持第二个参数
      // 表示开始搜索的位置。
      let s = 'Hello world!';

      s.startsWith('world', 6) // true
      s.endsWith('Hello', 5) // true
      s.includes('Hello', 6) // false
      `,
        `
      // repeat方法返回一个新字符串
      // 表示将原字符串重复n次。
      
      'x'.repeat(3) // "xxx"
      'hello'.repeat(2) // "hellohello"
      'na'.repeat(0) // ""
      `,
        `
      // ES2017 
      // padStart()用于头部补全
      // padEnd()用于尾部补全

      'x'.padStart(5, 'ab') // 'ababx'
      'x'.padStart(4, 'ab') // 'abax'

      'x'.padEnd(5, 'ab') // 'xabab'
      'x'.padEnd(4, 'ab') // 'xaba'

      // 如果省略第二个参数，默认使用空格补全长度。
      'x'.padStart(4) // '   x'
      'x'.padEnd(4) // 'x   '
      `,
        `
      // ES2019
      // trimStart()消除字符串头部的空格
      // trimEnd()消除尾部的空格

      const s = '  abc  ';

      s.trim() // "abc"
      s.trimStart() // "abc  "
      s.trimEnd() // "  abc"
      `
      ]
    };
  },
  methods: {
    code1Run() {
      var a = [];
      for (var i = 0; i < 10; i++) {
        a[i] = function() {
          console.log(i);
        };
      }
      a[6](); // 10
    },
    code2Run() {
      var a = [];
      for (let i = 0; i < 10; i++) {
        a[i] = function() {
          console.log(i);
        };
      }
      a[6](); // 6
    },
    code3Run() {}
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>

<style lang="css">
.code-block {
  max-width: 500px;
  margin: 10px auto;
}

.epage code {
  color: #a6e22e;
  font-size: 0.8rem;
  font-weight: normal;
}

.epage pre {
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0.7rem;
  line-height: 1.2;
  color: #fff;
  background: #111;
  border-radius: 5px;
}
</style>
