<template>
  <div class="test">
    <h1>Лента</h1>
    <post :data="post"/>
    <span class="error">123</span>
  </div>
</template>

<script>
  import axios from 'axios'
  import post from '~components/posts/post.vue'

  export default {
    layout: 'light',
    asyncData ({ params, error }) {
      return axios.get(`http://127.0.0.1:8000/api/v1/posts/${+params.id.split('-').slice(-1)}`)
      .then((res) => {
        return { post: res.data }
      })
    },
    head () {
      return {
        titleTemplate: `${this.post.title} - %s`
      }
    },
    fetch ({params}) {
      return {}
    },
    components: {
      post
    }
  }
</script>

<style>
  .error {
    color: #fff;
  }
</style>
