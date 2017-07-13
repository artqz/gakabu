<template>
  <div class="post">
    <div class="post-title">
      {{ data.title }}
    </div>
    <div class="post-header">
      <div class="game-image">
        <img src="/images/games/icons/2.jpg"/>
      </div>
      <div class="game-info">
        <div class="game-name">
          PLAYERUNKNOWN'S BATTLEGROUNDS
        </div>
        <div class="post-date">
          39 минут назад
        </div>
      </div>
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
  .post-header {
    padding: 11px 0;
    margin: 0 20px;
    text-align: right;
    overflow: overlay;
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
  .game-image {
    display: block;
    float: right;
  }
  .game-image img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: top;
  }
  .game-info {
    margin-right: 65px;
    padding-top: 8px;
  }
  .game-name {
    font-size: 13px;
    margin: 0;
    font-weight: 400;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
    }
  .post-date {
    font-size: 12.5px;
    padding-top: 3px;
  }
  .post-title {
    padding: 11px 20px;
    border-bottom: 1px solid;
  }
</style>
