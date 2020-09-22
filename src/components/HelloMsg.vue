<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This is a repository with basic examples of vue components testing
    </p>
    <div>
      <b-link to="/form">Form</b-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloMsg',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
