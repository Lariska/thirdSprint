<template>
    <section>
    <div class="post-img-about post-container-about">
        <img class="img-about" src="../../assets/lora.jpg">
    </div>

    <div class="post-text">
        <h1>Lora Arshavski</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque illo quibusdam, consectetur eos facere cum perspiciatis
            aperiam voluptas inventore nesciunt, assumenda nemo, maiores, deserunt ratione voluptatum sint expedita
            labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque illo quibusdam, consectetur eos facere cum perspiciatis
            aperiam voluptas inventore nesciunt, assumenda nemo, maiores, deserunt ratione voluptatum sint expedita
            labore!
        </p>
    </div>
        <div class="post-img-about post-container-about">
        <img class="img-about" src="../../assets/efim.jpg">
    </div>

    <div class="post-text">
        <h1>Efim Rozovsky</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque illo quibusdam, consectetur eos facere cum perspiciatis
            aperiam voluptas inventore nesciunt, assumenda nemo, maiores, deserunt ratione voluptatum sint expedita
            labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque illo quibusdam, consectetur eos facere cum perspiciatis
            aperiam voluptas inventore nesciunt, assumenda nemo, maiores, deserunt ratione voluptatum sint expedita
            labore!
        </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 5em;
  margin-bottom: 0px;
  color: #42b983;
  margin-top: 10%;
}
a {
  color: #42b983;
}
.post-img-about, .post-container-about, h1{
  display: flex;
  justify-content: center;
}
p{
  margin: 10px;
}
</style>