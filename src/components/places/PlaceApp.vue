<template>
<section>
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
      <div class="delete">
        <!--<button @click="deleteMarker">Delete</button>-->
        <el-button type="danger" @click="deleteMarker">Delete</el-button>
        </div>
        <div class="instruction"> 
        <el-collapse>
        <el-collapse-item title="Instruction" name="1">
            <h3>
               1) Rightclick on map to marker some place. 
            </h3>
            <h3>
               2) Click on input write something. 
            </h3>
            <h3>
               3) Click Enter to save text in input.
            </h3>
            <h3>
              4) Delete marker on map need to click on marker and after click on button botom - delete.
            </h3>
        </el-collapse-item>
    </el-collapse>
      </div>
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
      this.$http.post('/add_marker/', marker).then(response => {});
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
            this.$http.put('/edit_marker/', {marker: this.markers[i], new_text: text}).then(response => {
              this.markers[i].infoText = text;
            });
            break;
          }
        }
      }
    },
    deleteMarker (event) {
      for (var i = 0; i < this.markers.length; i++) {
        if (this.markers[i].position.lat == this.center.lat && this.markers[i].position.lng == this.center.lng) {
          this.$http.delete('/delete_marker/', {body: this.markers[i]}).then(response => {
            this.infoWinOpen = false;
            this.markers.splice(i, 1);
          });
          break;
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
  },
  created () {
    this.$http.get('/get_markers/').then(response => {
      this.markers = response.body;
    });
  }
}
</script>


<style scoped>
  .instruction, .delete{
    margin: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>

//server write in file dev-server.js (build/dev-server.js)