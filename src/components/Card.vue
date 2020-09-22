<template>
  <div>
    <div class="card">
      <img :src="getImageSrc()">
      <div class="container">
        <h4>{{person.name}}</h4>
        <p>Height: {{person.height}}</p>
        <p>Mass: {{person.mass}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['person'],
  methods:{
    getImageSrc(){
      return 'https://picsum.photos/150/?random&rnd'+Math.random()
    }
  }
}
</script>
<style lang="scss" scoped>
img{
  width: 100%;
  border-radius: 10px 10px 0px 0px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  transition: 0.3s;
  width: 350px;
  margin: 10px;
  border-radius: 10px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7);
  width: 355px;
}

.container {
  padding: 2px 16px;
}
</style>