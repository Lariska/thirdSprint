<template>
<!--<div class = "full-bar"><div :style="{ width:percentage+'%' }">{{percentage}}%</div></div>-->
<div>
  <el-progress v-if="percentage !== 100" :percentage="percentage" status="danger"></el-progress>
  <el-progress v-else :percentage="percentage" status="success"></el-progress>
</div>
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
