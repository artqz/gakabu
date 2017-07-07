<template>
  <div class="Post">
    <div class="postWrap">
        1
    </div>
  </div>
</template>

<script>
import Troll from '~components/Posts/Troll.vue'

export default {
  components: {
    Troll
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
}
.postWrap {
  padding: 11px 0;
  margin: 0 20px;
  border-top: 1px solid #000000;
  border-radius: 0 0 2px 2px;
  overflow: hidden;
}
</style>
