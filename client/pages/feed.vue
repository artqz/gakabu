<template>
  <div class="test">
    <h1>Лента</h1>
    <div v-for="post in posts">
      <post :data="post"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import post from '~components/posts/post.vue'

  export default {
    layout: 'light',
    data () {
      console.log(this)
      return { posts: [] }
    },
    asyncData () {
      return axios.get('http://127.0.0.1:8000/api/v1/posts')
      .then((res) => {
        return { posts: res.data }
      })
    },
    head: {
      titleTemplate: 'Лента - %s'
    },
    components: {
      post
    }
  }
</script>
