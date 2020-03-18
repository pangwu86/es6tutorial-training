<template>
  <div class="epage">
    <h1>第06章-10章</h1>
    <div v-for="c in chapterList" :key="c.title">
      <h2>{{ c.title }}</h2>
      <section>
        <div
          class="code-block"
          v-for="(ec, idx) in c.code"
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
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  data: function() {
    return {
      chapterList: [
        {
          title: "",
          code: []
        }
      ]
    };
  },
  methods: {},
  mounted() {
    Prism.highlightAll();
  }
};
</script>

<style lang="css"></style>
