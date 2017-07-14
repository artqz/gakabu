<template>
  <div class="">
    {{message}}
    <div v-for="game in games">
        {{game.name}}
    </div>
    <AutocompleteInput url="http://localhost:8000/api/v1/games/"/>
    <input v-model="message" @input="getGames">
    <input type="submit" name="" value="og" @click="getGames">
    <input type="title" name="" value="">
    <textarea name="body" rows="8" cols="80"></textarea>
    <input type="submit" name="" value="og" @click="addPost">
  </div>
</template>

<script>
  import axios from 'axios'
  import AutocompleteInput from '~components/Posts/AutocompleteInput.vue'

  export default {
    layout: 'light',
    head: {
      titleTemplate: ' - %s'
    },
    components: {
      AutocompleteInput
    },
    computed: {
      main: function () {
        return this.games.indexOf('cover') === 0
      }
    },
    data () {
      console.log(this)
      return {
        message: null,
        games: []
      }
    },
    methods: {
      addPost (e) {
        console.log(this.savePost())
      },
      savePost (params, error) {
        return axios.post('http://localhost:8000/api/v1/posts', {
          title: 'Artem',
          body: 'Artem'
        })
        .then((res) => {
          console.log(res)
        })
      },
      getGames () {
        console.log(this.message)
        return axios.get(`http://localhost:8000/api/v1/games/${this.message}`)
        .then((res) => {
          this.games = res.data
          console.log(res.data)
        })
      }
    }
  }
</script>
