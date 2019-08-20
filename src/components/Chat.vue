<template>
  <div class="chat container">
    <h2>Chat {{ this.name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: ['name'], //Variables that we want to accept
  data(){
    return{
    }
  }
}
</script>

<style>
</style>
