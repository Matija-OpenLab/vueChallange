<template>
  <div>
    <h1>Homepage</h1>
    <form>
      <input placeholder="Meno" v-model="name" type="text"/>
      <button type="submit" @click.prevent="navigateToCards">Prejsť na karty</button>
    </form>
    <span>{{error}}</span>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name: '',
      error: ''
    }
  },
  methods:{
    navigateToCards(){
      if(this.name.trim() != '') {
        this.$store.state.name = this.name
        this.$router.push({name: 'Cards'})
      }
      else this.error = "Prosím zadajte meno"
    }
  }
}
</script>
<style lang="scss" scoped>
span{
  color: red;
}
</style>