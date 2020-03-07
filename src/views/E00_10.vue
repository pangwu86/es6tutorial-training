<template>
  <div class="epage">
    <h1>第00章-10章</h1>
    <h2>let和const</h2>
    <section>
      <div class="code-block">
        <pre>
          <code class="language-javascript">
          {{ code1 }}
        </code>
        </pre>
        <button @click="code1Run">RUN</button>
      </div>
      <div class="code-block">
        <pre>
          <code class="language-javascript">
          {{ code2 }}
        </code>
        </pre>
        <button @click="code2Run">RUN</button>
      </div>
    </section>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  data: function() {
    return {
      code1: `
      // 老问题，希望的输出跟实际不一致
      var a = [];
      for (var i = 0; i < 10; i++) {
        a[i] = function () {
          console.log(i); // 希望按照0，1，2...来输出
        };
      }
      a[6](); // 10
      `,
      code2: `
      // let解决了上面的问题
      var a = [];
      for (let i = 0; i < 10; i++) {
        a[i] = function () {
          console.log(i);
        };
      }
      a[6](); // 6`
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
    }
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
