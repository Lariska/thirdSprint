<template>
<section>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="aboutUs">
    <h2>About Us</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque illo quibusdam, consectetur eos facere cum perspiciatis
      aperiam voluptas inventore nesciunt, assumenda nemo, maiores, deserunt ratione voluptatum sint expedita
      labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque illo quibusdam, consectetur eos facere cum perspiciatis
      aperiam voluptas inventore nesciunt, assumenda nemo, maiores, deserunt ratione voluptatum sint expedita
      labore!
    </p>
  </div>
</section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Appsus'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.aboutUs{
  text-align: left;
  margin: 50px;
}
</style>
