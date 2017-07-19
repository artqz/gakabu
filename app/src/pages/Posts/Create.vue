<template>
  <div id="post-create">
    <div class="post-title">
      Заголовок
    </div>
    <div class="post-game">
      Выбор игры
    </div>
    <div class="post-body">
      <ul class="items-list">
        <li class="item" v-for="(items, index) in editor.bodyItems">
          <div class="item-input" v-if="items.type == 'text'">
            <medium-editor :id="index" :text='items.value' :options="options" custom-tag='div' v-on:edit='processEditOperation' />
          </div>
          <div v-if="items.type == 'image'">
            <img :src="items.value" alt="">
          </div>
        </li>
      </ul>
      <ul>
        <li @click="addItem('text')">Добавить текст</li>
        <li @click="addItem('images')">Добавить изображение</li>
        <li @click="addItem('video')">Добавить видео</li>
      </ul>
    </div>
    <div class="post-tags">
      Тэги
    </div>
    <div class="post-settings">
      Настройки {{editor}}
    </div>
  </div>
</template>

<script>
  import editor from 'vue2-medium-editor'

  export default {
    components: {
      'medium-editor': editor
    },
    html: {
      title: '123'
    },
    data () {
      return {
        editor: {
          title: '',
          gameId: '',
          gameTitle: '',
          bodyItems: [
            {type: 'text', value: '1'},
            {type: 'image', value: 'http://www.otoina.com/wp-content/uploads/2014/05/Kawasaki-Versys-650.jpg'}
          ]
        },
        options: {
          toolbar: {
            buttons: ['bold', 'italic', 'strikethrough', 'anchor', 'quote']
          }
        }
      }
    },
    methods: {
      addItem (type) {
        if (type == 'text') {
          console.log(type)
          this.editor.bodyItems.push({type: 'text', value: ''})
        }
      },
      processEditOperation (operation) {
        var itemId = operation.event.target.id
        this.editor.bodyItems[itemId].value = operation.event.srcElement.innerHTML
      }
    }
  }
</script>

<style media="screen">
  #post-create {
    width: 600px;
  }
  .post-body {
    width: 100%;
    border: 1px solid #ccc;
    background-color: #fff;
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
    border-radius: 2px;
  }
  .items-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .item-input {
    padding: 7px 15px;
  }
  .item .medium-editor-element {
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
  .item .medium-editor-element p {

  }
  .item .medium-editor-element:focus {
    outline: none;
  }
</style>
