<template>
  <div class="autocomplete-input">
    <input type="text" placeholder="Выбрать игру..." v-model="query" @input="onChange">
    <ul class="autocomplete-list" v-show="showList">
      <div class="loading" v-show="loading">
        <span class="spinner"></span>
      </div>
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
        delay: 1000,
        games: [],
        loading: false,
        showList: false
      }
    },
    methods: {
      wait () {
        if (this.query.length >= 1) {
          clearTimeout(this.timer)

          this.timer = setTimeout(() => {
            return axios.get(this.url + this.query)
            .then((res) => {
              this.loading = false
              this.showList = true
              this.games = res.data
              console.log(this)
            })
          }, this.delay)

          return this.timer
        } else {
          this.loading = false
          this.showList = false
          this.games = []
        }
      },
      onChange () {
        this.loading = true
        this.showList = true
        this.wait()
      }
    }
  }
</script>

<style>
 .autocomplete-input {
   width: 100%;
   position: relative;
 }
 .autocomplete-input input {
   width: 100%;
   cursor: text;
   border: 1px solid #ccc;
   padding: 10px 15px;
   width: 100%;
   height: 40px;
   overflow: hidden;
   position: relative;
   z-index: 1;
   position: absolute;
   border-radius: 2px;
 }
 .autocomplete-input input:focus {
   outline: none;
 }
 .autocomplete-list {
   position: absolute;
   display: block;
   width: 100%;
   background-color: #fff;
   list-style: none;
   margin: 0;
   padding: 0;
   border: 1px solid #d7d8db;
   border-bottom-left-radius: 2px;
   border-bottom-right-radius: 2px;
   z-index: 2;
   top: 39px;
 }
 .autocomplete-list li {
   padding: 10px 15px;
   font-size: 13px;
   cursor: pointer;
 }
 .autocomplete-list li:hover {
   background-color: #f5f5f5;
   color: #5a5a5a;
 }
 .loading {
   width: 100%;
   position: relative;
   height: 40px;
}
 .spinner {
   left: 50%;
   top: 4px;
   position: absolute;
   background-image: url(/images/icons/spinner.svg);
   background-repeat: no-repeat;
   display: block;
   background-size: 36px 36px;
   width: 36px;
   height: 36px;
   animation-name: rotation;
   animation-duration: 2s;
   animation-iteration-count: infinite;
   animation-timing-function: linear;
 }
 @keyframes rotation {
    0% {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
}
</style>
