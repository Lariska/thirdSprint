<template>
    <gmap-map
        :center="getCenter"
        :zoom="7"
        map-type-id="terrain"
        style="width: 800px; height: 450px"
        @rightclick="addMarker">
      <gmap-marker
          :key="index"
          v-for="(m, index) in getMarkers"
          :clickable="true"
          :position="m.position"
          @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
</template>

<script>
export default {
  name: 'Place',
  data () {
      return {
        center: {lat: 10.0, lng: 10.0},
        markers: []
      }
  },
  methods: {
    addMarker(event) {
      // debugger
      this.markers.push({
          position: {lat: event.latLng.lat(), lng: event.latLng.lng()}
      });
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

</style>
