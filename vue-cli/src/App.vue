<template>
  <div>
    <app-header v-bind:titleProp="title" @changeTitleEvent="title = $event"></app-header>
    <app-content v-bind:ninjas="ninjas"></app-content>
    <app-slots>
      <h2 slot="title">Test</h2>
      <p slot="text">I am the paragraph text for the slots</p>
    </app-slots>
    <app-footer v-bind:titleProp="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Slots from './components/Slots';

export default {
  data() {
    return {
      ninjas: [
        { name: 'Ryu', specialty: 'Vue Components', show: false },
        { name: 'Ken', specialty: 'HTML Wizard', show: false },
        { name: 'Blanka', specialty: 'CSS Darklord', show: false },
        { name: 'Vile', specialty: 'JavaScript Berzerk', show: false },
      ],
      title: 'Allan Liu',
    }
  },
  methods: {
    updateTitle: function(newTitle) {
      this.title = newTitle;
    }
  },
  components: {
    'app-header': Header,
    'app-content': Content,
    'app-footer': Footer,
    'app-slots': Slots,
  }
}
</script>

<style scoped>
</style>
