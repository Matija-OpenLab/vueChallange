import axios from 'axios'

export default {
  namespaced: true,
  state: {
    people: []
  },
  mutations: {
    poepleFetched(state, people) {
      state.people = people.results
    }
  },
  actions: {
    async fetchPeople({commit}){
      const { data } = await axios.get('https://swapi.dev/api/people')
      commit('poepleFetched', data)
    }
  }
}
