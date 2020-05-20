<template>
  <div id="main">
    {{msg}}-{{getMessage}}
  </div>
</template>

<script>
export default {
  name:'index',
  data(){
    return {
    msg:'thanks'
    }
  },
  computed:{
    getMessage(){
      return this.$store.getters.getMessage
    }
  }
}
</script>

<style lang='less' scoped>
  #main{
    color: aqua;
  }
</style>
