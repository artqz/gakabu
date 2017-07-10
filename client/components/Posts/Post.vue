<template>
  <div class="post">
    <div class="post-head">
      <nuxt-link :to="'/posts/'+data.slug+'-'+data.id">{{ data.title }}</nuxt-link>
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
  background: #0a0a0a;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 0 0 #000000, 0 0 0 1px #000000;
  box-shadow: 0 1px 0 0 #000000, 0 0 0 1px #000000;
  margin: 15px 0 0;
  color: rgb(156, 159, 163);

  background-color: rgb(27, 32, 36);

    overflow: hidden;
    -webkit-box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.1);
    -khtml-box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.1);
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.1);
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
  border-top: #252a2e 1px dashed;
  border-radius: 0 0 2px 2px;
  overflow: hidden;
}
</style>
