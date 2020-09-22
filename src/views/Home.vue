<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/images/vue-jest.png">
    <HelloMsg msg="Vue Unit Testing"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloMsg from '@/components/HelloMsg.vue'

export default {
  name: 'Home',
  components: {
    HelloMsg
  }
}
</script>

<style scoped>
  img {
    max-width: 300px;
  }
</style>
