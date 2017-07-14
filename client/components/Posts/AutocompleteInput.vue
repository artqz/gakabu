<template>
  <div class="autocomplete-input">
    <input type="text" placeholder="Выбрать игру..." v-model="query" @input="onChange">
    <ul class="autocomplete-list">
      <li v-for="game in games">
        {{game.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      url: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        query: null,
        timer: null,
        delay: 600,
        games: []
      }
    },
    methods: {
      wait () {
        clearTimeout(this.timer)

        this.timer = setTimeout(() => {
          return axios.get(this.url + this.query)
          .then((res) => {
            this.games = res.data
            console.log(this)
          })
        }, this.delay)

        return this.timer
      },
      onChange () {
        this.wait()
      }
    }
  }
</script>

<style>
 .autocomplete-input {
   width: 100%;
 }
 .autocomplete-list {
   background-color: #fff;
   list-style: none;
   margin: 0;
   padding: 0;
 }
</style>
