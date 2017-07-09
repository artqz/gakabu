<template>
  <div class="post">
    <div class="post-body">
      Text test
    </div>
    <div class="post-wrap">
        <troll/>
    </div>
  </div>
</template>

<script>
import troll from '~components/posts/troll.vue'

export default {
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
  color: #b9b9b9;
}
.post-body {
  padding: 11px 0;
  margin: 0 20px;
}
.post-wrap {
  padding: 11px 0;
  margin: 0 20px;
  border-top: 1px solid #000000;
  border-radius: 0 0 2px 2px;
  overflow: hidden;
}
</style>
