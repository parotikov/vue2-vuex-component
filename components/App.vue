<template>
  <div>
      <h1>{{ points }}</h1>
      <points></points>
  </div>
</template>

<script>
import PointsIncrease from './PointsIncrease.vue'

export default {
  computed: {
    points () {
      return this.$store.getters.getPoints
    }
  },
  methods: {
    add: function() {
        this.$store.dispatch('addPoint');
    }
  },
  components: { 'points': PointsIncrease }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>