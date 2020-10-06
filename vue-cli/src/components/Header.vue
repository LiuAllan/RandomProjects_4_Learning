<template>
  <header>
    <h1 @click="changeTitle">{{ titleProp }}</h1>
  </header>
</template>

<script>
// import { bus } from '../main';

export default {
    props: {
        titleProp: {
            type: String
        }
    },
    data() {
        return {
        }
    },
    methods: {
        changeTitle: function() {
            // this.titleProp = 'Vue Ninjas'
            this.$emit('changeTitleEvent', 'Vue Wizards');
            // this.titleProp = 'Vue Ninja';
            // bus.$emit('titleChangedEvent', 'Vue Wizards');
        }
    }
}
</script>

<style scoped>
    header {
        background: lightgreen;
        padding: 10px;
    }
    h1 {
        color: #222;
        text-align: center;
    }
</style>
