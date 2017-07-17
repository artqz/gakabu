<template>
  <div class="post-editor">
    <div class="input-box">
      <ul class="inputs-list">
        <li class="input" v-for="input in inputs">
          <div class="input-field" v-if="input.type == 'text'">
          <TextElement :content="input.value" @update="text = $event"></TextElement>
          </div>
          <div v-if="input.type == 'image'">
            <img :src="input.value" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="post-editor-nav">
      <ul>
        <li @click="addElement(type = 'text')">Добавить текст</li>
        <li>Добавить Картинку</li>
        <li @click="test">Добавить Видео</li>
      </ul>
    </div>
  </div>
</template>

<script>
import TextElement from '~components/Posts/Editor/TextElement.vue'

export default {
  components: {
    TextElement
  },
  data () {
    return {
      text: 'This text is editable!',
      inputs: [
        {type: 'text', value: '1'},
        {type: 'image', value: 'http://s9.pikabu.ru/post_img/2017/07/17/4/1500267335125988439.jpg'}
      ]
    }
  },
  methods: {
    addElement (type) {
      console.log(type)
      this.inputs.push({type: type, value: ''})
    },
    test (type) {
      console.log(this.inputs)
    }
  }
}
</script>

<style>
  .input-box {
    width: 100%;
    border: 1px solid #ccc;
    background-color: #fff;
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
    border-radius: 2px;
  }
  .inputs-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .input-field {
    padding: 7px 15px;
  }
  .input .field {
    background: url(/images/elements/line-text-bg.png);
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    width: 100%;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-height: 20px;
    overflow: hidden;
    line-height: 18px;
    font-size: 13px;
  }
  .input .field p {

  }
  .input .field:focus {
    outline: none;
  }
</style>
