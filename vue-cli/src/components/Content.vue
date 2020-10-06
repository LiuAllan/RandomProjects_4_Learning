<template>
    <div class="ninjas">
        <ul>
            <li v-for="(ninja, index) in ninjas" :key="index" @click="ninja.show = !ninja.show">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.specialty }}</h3>
            </li>
        </ul>
        <button @click="deleteNinja">Delete a Ninja</button>
    </div>
</template>

<script>

export default {
    props: {
        ninjas: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
        }
    },
    methods: {
        deleteNinja: function() {
            this.ninjas.pop();
        }
    },
    // Lifecycle Hooks - are functions
    beforeCreate() {
        // Runs BEFORE the component has been created
        // alert('beforeCreate');
    },
    created() {
        // Used for fetching API's
        // Still nothing on the screen because it has not been MOUNTED yet
        // alert('created');
    },
    beforeMount() {
        // alert('beforeMount');
    },
    mounted() {
        // Good for manipulating the DOM after it has been mounted
        // alert('mounted');
    },
    beforeUpdate() {
        // Runs BEFORE anything has changed in the browser
        // alert('beforeUpdate');
    },
    updated() {
        // runs AFTER it has been updated
        // alert('updated');
    }
}
</script>

<style scoped>
    .ninjas {
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li {
        flex: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid black;
        margin: 10px;
    }
    li:hover {
        background-color: whitesmoke;
    }
</style>
