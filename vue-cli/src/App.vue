<template>
  <div>
    <h1>{{ title }}</h1>
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  data() {
    return {
      title: 'App'
    }
  },
  components: {
    Hello
  }
}
</script>

<style scoped>
  h1 {
    color: purple;
  }
</style>
