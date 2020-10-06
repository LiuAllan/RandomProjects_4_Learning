<template>
    <footer>
        <p>{{ copyright }} {{ titleProp }}</p>
    </footer>
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
            copyright: 'Copyright 2020'
        }
    },
}
</script>

<style scoped>
    footer {
        background: #222;
        padding: 6px;
    }
    p {
        color: lightgreen;
        text-align: center;
    }
</style>
