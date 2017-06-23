<template>
<div class = "full-bar"><div :style="{ width:percentage+'%' }">{{percentage}}%</div></div>
</template>

<script>
export default {
  name: 'progress-bar',
  props: ['percentage'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
.full-bar{
  width: 100%;
  background-color: black;
  color: white;
}
.full-bar div{
  background-color: green;
}
</style>
