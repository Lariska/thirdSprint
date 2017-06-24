<template>
  <div id="app">
    <nav class="main-nav flex align-center justify-center">
    <ul class="clean-list flex flex align-center">
        <router-link to="/" class="active"><span>Appsus</span></router-link>
          <li class="logo flex align-center justify-center">
              <img src="./assets/logo.png" alt="Company name">
          </li>
          <router-link to="/about" class="active"><span>About</span></router-link>
      </ul>
    </nav>

    <AppBar></AppBar>
    <router-view></router-view>

    <footer class="main-footer flex justify-center align-center clean-list">
        <li>&copy; 2017 Coding Academy</span>
        </li>
    </footer>
  </div>
</template>

<script>
import AppBar from './components/main/AppBar'
export default {
  name: 'app',
  components: {
    AppBar
  }
}
</script>

<style scope>
body{
  background-color: lightblue;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.active{
  font-family: Lato;
  font-size:1.90rem;
  color: white;
}
.main-nav{
  background-color: black;
}
.clean-list{
  margin: 0;
}
</style>
