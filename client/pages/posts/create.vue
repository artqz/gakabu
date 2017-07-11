<template>
  <div class="">
    <input type="title" name="" value="">
    <textarea name="body" rows="8" cols="80"></textarea>
    <input type="submit" name="" value="og" v:on="click">
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    asyncData ({ params, error }) {
      return axios.post('http://127.0.0.1:8000/api/v1/posts', {
        title: 'Fred',
        body: 'Flintstone'
      })
      .then((res) => {
        console.log(res)
      })
    },
    head: {
      titleTemplate: ' - %s'
    }
  }
</script>
