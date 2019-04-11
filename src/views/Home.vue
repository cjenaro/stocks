<template>
  <div class="box">
    <h1 class="is-size-1">Trade or view your portfolio</h1>
    <p>You may save and load your data</p>
    <p>Click 'End day' to begin a new day!</p>
    <hr>
    <h2 class="is-size-4">Your funds: {{ getf }} </h2>
  </div>
</template>

<script>

export default {
  name: 'home',
  computed: {
    getf() {
      return this.$store.state.funds
    }
  }
}
</script>

<style scoped>
.box {
  border: thin solid black;
  margin: 20px;
  text-align: left;
}

h2 {
  font-weight: bold;
}
</style>
 