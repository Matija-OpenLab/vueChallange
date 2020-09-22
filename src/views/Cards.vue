<template>
  <div>
    <button @click="$router.push({name: 'Home'})">Go back</button>
    <h1>Cards for {{$store.state.name}}</h1>
    <div v-if="$store.state.starWars.people"  class="people">
      <Card v-for="person in $store.state.starWars.people" :key="person.name" :person="person"/>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    'Card': () => import('@/components/Card.vue')
  },
  mounted(){
    this.$store.dispatch('starWars/fetchPeople')
  },
}
</script>
<style lang="scss" scoped>
.people{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>