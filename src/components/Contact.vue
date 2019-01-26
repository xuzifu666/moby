<template>
  <div>
    <h1>contact</h1>
  </div>
</template>

<script>
    export default {
        data() {
          return {}
        },
        components: {},
      created:function () {
        this.$store.commit('changeTitle',this.$route.name)
        console.log(this.$route.path)
      }
    }
</script>

<style scoped>
</style>
