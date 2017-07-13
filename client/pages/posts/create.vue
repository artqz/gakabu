<template>
  <div class="">
    <input type="title" name="" value="">
    <textarea name="body" rows="8" cols="80"></textarea>
    <input type="submit" name="" value="og" @click="addPost">
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    layout: 'light',
    head: {
      titleTemplate: ' - %s'
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
      }
    }
  }
</script>
