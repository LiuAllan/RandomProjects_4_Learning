<template>
    <div>
        <h1>List of Names</h1>
        <ul>
            <li v-for="(name, index) in names" :key="index">
                {{ name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      names: [
          'Yoshi',
          'Mario',
          'Ryu'
      ]
    }
  },
}
</script>

<style scoped>
    div ul{
       color: green;
    }
</style>
