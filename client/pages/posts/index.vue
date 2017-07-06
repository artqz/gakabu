<template>
  <ul class="posts">
    <li v-for="post in posts">
      <nuxt-link :to="'/posts/'+post.id">{{ post.title }}</nuxt-link>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  asyncData () {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return { posts: res.data }
    })
  }
}
</script>
