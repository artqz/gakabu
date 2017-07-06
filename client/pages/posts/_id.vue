<template>
  <div class="posts">
    <h3>{{ title }}</h3>
    <p>{{ body }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  asyncData ({ params, error }) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then((res) => res.data)
    .catch(() => {
      error({ message: 'Posts not found', statusCode: 404 })
    })
  }
}
</script>
