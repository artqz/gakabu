<template>
  <div class="test">
    <h1>Лента</h1>
    <post v-bind:body="test"/>
  </div>
</template>

<script>
  import post from '~components/posts/post.vue'

  export default {
    head: {
      titleTemplate: 'Feed - %s'
    },
    data: {
      test: 123
    },
    components: {
      post
    }
  }
</script>
