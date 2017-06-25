<template>
    <progress-bar
    :percentage="generatePercantage"
    ></progress-bar>
</template>

<script>
import ProgressBar from '../general/ProgressBar';
export default {
  name: 'email-status',
  props: ['emails'],
  components: {ProgressBar},
  data () {
    return {
      // emailsNum:null;
      // readNum:null;
    }
  },
  computed: {
    generatePercantage(){
      var readCount = 0;
      var percantage;
      this.emails.forEach(email => {
        if(email.isRead){
          readCount++;
        }
      });
      percantage = readCount/(this.emails.length / 100); 
      if(Number.isNaN(percantage)) percantage = 0;
      return Math.round(percantage);
    }
  }
}
</script>

<style >

</style>
