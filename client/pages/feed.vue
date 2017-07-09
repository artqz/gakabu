<template>
  <div class="test">
    <h1>Лента</h1>
    <post/>
  </div>
</template>

<script>
  import post from '~components/posts/post.vue'

  export default {
    head: {
      title: 'feed'
    },
    components: {
      post
    }
  }
</script>
