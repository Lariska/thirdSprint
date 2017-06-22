<template>
<section>
    <nav class="main-nav flex align-center justify-center">
      <ul class="clean-list flex flex align-center">
          <li class="active"><span>Appsus</span></li>
          <li class="logo flex align-center justify-center">
              <img src="../assets/logo.png" alt="Company name">
          </li>
          <!--<li class="active"><a href="#about"><span>About</span></a></li>-->
          <li class="active"><span>About</span></li>
      </ul>
  </nav>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div>
    <!--<a name="about"></a>-->
    <h2 class="title">About Us</h2>
    <p class="aboutUs">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque illo quibusdam, consectetur eos facere cum perspiciatis
      aperiam voluptas inventore nesciunt, assumenda nemo, maiores, deserunt ratione voluptatum sint expedita
      labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque illo quibusdam, consectetur eos facere cum perspiciatis
      aperiam voluptas inventore nesciunt, assumenda nemo, maiores, deserunt ratione voluptatum sint expedita
      labore!
    </p>
  </div>
  <div class="inner-links flex justify-center align-center">
      <div style="padding: 14px;">
        <span class="title">Appsus</span>
      </div>
      <img src="../assets/logo.png" class="image">
      <img src="../assets/logo.png" class="image">
      <img src="../assets/logo.png" class="image">
  </div>

<footer class="main-footer flex justify-center align-center clean-list">
  <li>&copy; 2017 Coding Academy</span>
  </li>
</footer>
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

<style scoped>
h1{
    margin: 100px;
}
h2 {
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
.active{
  font-family: Lato;
  font-size:1.90rem;
  color: white;
}
.title{
  text-align: left;
  margin: 50px;
  font-family: Lato;
  font-size:1.90rem;
}
.aboutUs{
  text-align: left;
  margin: 50px;
}
.main-nav{
  background-color: black;
}
img{
  margin: 50px;
}

</style>
