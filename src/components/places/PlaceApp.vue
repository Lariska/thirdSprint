<template>
<section>
      <nav class="main-nav flex align-center justify-center">
      <ul class="clean-list flex flex align-center">
          <li class="active" @click="hello"><span>Appsus</span></li>
          <li class="logo flex align-center justify-center">
              <img src="../../assets/logo.png" alt="Company name">
          </li>
          <li class="active"><span>About</span></li>
      </ul>
  </nav>

      <gmap-map
          :center="getCenter"
          :zoom="7"
          map-type-id="terrain"
          style="width: 800px; height: 450px"
          @rightclick="addMarker">

          <gmap-info-window
            :options="infoOptions" 
            :position="infoWindowPos" 
            :opened="infoWinOpen" 
            :content="infoContent" 
            @domready="infoOpened"
            @content_changed="infoChanged"
            @closeclick="infoWinOpen=false">
          </gmap-info-window>

        <gmap-marker
            :key="index"
            v-for="(m, index) in getMarkers"
            :clickable="true"
            :position="m.position"
            @click="toggleInfoWindow(m,index)">
        </gmap-marker>
      </gmap-map>
      

  <footer class="main-footer flex justify-center align-center clean-list">
    <li>&copy; 2017 Coding Academy</span></li>
  </footer>
</section>
</section>
</template>

<script>
export default {
  name: 'Place',
  data () {
      return {
        center: {lat: 10.0, lng: 10.0},
        markers: [],
        infoContent: '',
        infoOptions: { pixelOffset: { width: 0, height: -35}},
        infoWinOpen: false,
        infoWindowPos: { lat: 0, lng: 0}
      }
  },
  methods: {
    addMarker(event) {
      var marker = {
          position: {lat: event.latLng.lat(), lng: event.latLng.lng()},
          infoText: 'Add your place name here'
      }
      this.markers.push(marker);
      this.$http.post('/add_marker', marker);
    },
    hello(){
      this.$router.push({name: 'hello'});
    },

    toggleInfoWindow (marker, index) {
      this.center = marker.position;
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == index) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = index;
      }
    },

    infoOpened (event) {
      var that = this;
      this.$el.querySelector(".gm-style-iw").addEventListener("click", function(ev) {
        if (ev.target.name != "") {
          var element = ev.target;
          var text = element.textContent;
          var input = document.createElement("input");
          input.setAttribute("value", text);
          input.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode == 13) {
              var inp = event.target
              that.infoContent = inp.value;
              inp.parentElement.removeChild(inp);
            }
          });
          if (element.parentElement) {
            element.parentElement.appendChild(input);
            element.parentElement.removeChild(element);
          }
          ev.target.removeEventListener("click", this);
        }
      })
    },

    infoChanged (event) {
      var info = this.$el.querySelector(".gm-style-iw");
      if (info) {
        var text = info.firstChild.textContent;
        for (var i = 0; i < this.markers.length; i++) {
          if (this.markers[i].position.lat == this.center.lat && this.markers[i].position.lng == this.center.lng) {
            this.markers[i].infoText = text;
          }
        }
      }
    }
  },
  computed:{
    getMarkers(){
      return this.markers;
    },
    getCenter() {
      var that = this;
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          that.center = {lat: position.coords.latitude, lng: position.coords.longitude};
          return that.center;
        });
      }
      return this.center;
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
  footer{
    padding: 20px;
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
