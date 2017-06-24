<template>
  <section>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
    <hr/>
        <router-link to ="/place"><img src="../../assets/maps.png" class="image"></router-link>
        <router-link to ="/email"><img src="../../assets/Email.png" class="image"></router-link>
        <router-link to ="/book-list"><img src="../../assets/Book.png" class="image"></router-link>
    <hr/>
  </section>
</template>

<script>
export default {
  name: 'appbar',
  data() {
    return {
      msg: 'Welcome to Appsus'
    }
  }
}
</script>

<style scoped>
  img{
    margin: 50px;
  }
</style>