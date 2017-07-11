<template>
  <div class="post">
    <div class="post-head">
      <nuxt-link :to="'/posts/'+data.slug+'-'+data.id">{{ data.title }}</nuxt-link>
      {{ data.slug }}
    </div>
    <div class="post-body">
      <div v-html="data.body"></div>
    </div>
    <div class="post-wrap">
      <troll/>
    </div>
  </div>
</template>

<script>
import troll from '~components/posts/troll.vue'

export default {
  props: ['data'],
  components: {
    troll
  }
}
</script>

<style>
.post {
  margin-top: 15px;
  border-radius: 2px;
  position: relative;
  border-radius: 2px;
  margin: 15px 0 0;
  line-height: 1.462;
  padding-top: 3px;
  overflow: hidden;
  word-wrap: break-word;
}
.post-head {
  padding: 11px 0;
  margin: 0 20px;
}
.post-body {
  padding: 11px 0;
  margin: 0 20px;
}
.post-wrap {
  padding: 11px 0;
  margin: 0 20px;
  border-top: 1px dashed;
  border-radius: 0 0 2px 2px;
  overflow: hidden;
}
</style>
