  <template>
  <div id="app">
    <!--<header>-->
    <nav class="main-nav flex align-center justify-center">
    <ul class="clean-list flex flex align-center">
        <router-link to="/" class="active"><span>Appsus</span></router-link>
          <li class="logo flex align-center justify-center">
              <img src="../assets/logo.png" alt="Company name">
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
import AppBar from '../components/main/AppBar'
export default {
  name: 'hello',
  components: {
    AppBar
  },
  data () {
    return {
      msg: 'Welcome to Appsus'
    }
  }
}
</script>

<style scoped>
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
/*.title{
  text-align: left;
  margin: 50px;
  font-family: Lato;
  font-size:1.90rem;
}*/
/*.aboutUs{
  text-align: left;
  margin: 50px;
}*/
.main-nav{
  background-color: black;
}
/*img{
  margin: 50px;
}*/
/*.card{
  background-color: lightblue;
}*/
.clean-list{
  margin: 0;
}
</style>
