<template>
<section class = "compose">

    <el-input
        type="textarea"
        autosize
        placeholder="Subject:"
        v-model="subject">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
        type="textarea"
        :autosize="{ minRows: 37, maxRows: 70}"
        placeholder="Text:"
        v-model="body">
    </el-input>
    <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        <el-button type="success" @click = "sendEmail">Send</el-button>
    </el-row>
</section>
</template>

<script>
export default {
  name: 'email-compose',
  data () {
    return {
        subject:null,
        body:null
    }
  },
  methods :{
    sendEmail() {
    this.$emit('emailSent', this.subject, this.body);
    this.body = null;
    this.subject = null;
    }
  }
}
</script>

<style>
.compose{
    display:flex;
    flex-direction: column;
    width:100%;
}
.subject{
    display:flex;
    height:20%;
}
.compose el-input{
    max-height:1em;
    width:100%;
    margin-top:18.72px;
}
textarea{
    height:100%;
}
.send-button{
    height:20%;
}
</style>
