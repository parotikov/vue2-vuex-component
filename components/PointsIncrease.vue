<template>
  <div>
      <button @click="add">Добавить</button>
  </div>
</template>

<script>

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
  }
}
</script>
