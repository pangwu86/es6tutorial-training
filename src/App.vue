<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/e00-05">00章-05章</router-link> |
      <router-link to="/e06-10">06章-10章</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

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
