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
          <div class="item-text" v-if="items.type == 'text'">
            <medium-editor :id="index" :text='items.value' :options="options" custom-tag='div' v-on:edit='processEditOperation' />
          </div>
          <div class="item-image" v-if="items.type == 'image'">
            <img :src="items.value" alt="">
          </div>
        </li>
      </ul>
      <ul class="panel-adding">
        <li>
          <div class="item add-text" @click="addItem('text')" title="Добавить текст">
            <i class="i-sprite-add-text"></i>
          </div>
        </li>
        <li>
          <div class="item add-image" @click="addItem('images')" title="Добавить изображение">
            <i class="i-sprite-add-image"></i>
          </div>
        </li>
        <li>
          <div class="item add-video" @click="addItem('video')" title="Добавить видео">
            <i class="i-sprite-add-video"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="post-tags">
      Тэги
    </div>
    <div class="post-settings">
      Настройки
    </div>
  </div>
</template>

<script>
  import editor from 'vue2-medium-editor'

  export default {
    components: {
      'medium-editor': editor
    },
    data () {
      return {
        editor: {
          title: '',
          gameId: '',
          gameTitle: '',
          bodyItems: [
            {type: 'text', value: ''},
            {type: 'image', value: 'http://www.otoina.com/wp-content/uploads/2014/05/Kawasaki-Versys-650.jpg'}
          ]
        },
        options: {
          toolbar: {
            buttons: [
              {name: 'bold', aria: 'Жирный'},
              {name: 'italic', aria: 'Курсив'},
              {name: 'strikethrough', aria: 'Зачеркнутый'},
              {name: 'anchor', aria: 'Ссылка'},
              {name: 'quote', aria: 'Цитата'}
            ]
          },
          placeholder: {
            text: 'Введите текст'
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
  .item-text {
    padding: 15px 15px;
  }
  .item-image {
    padding: 15px 0;
  }
  .item {
    margin-bottom: 0;
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
  .item .medium-editor-element blockquote {
    font-style: italic;
    color: #8c8681;
    background: #faf9f4;
    padding: 9px 5px;
    border-radius: 2px;
    border: 0;
    margin: 0;
  }
  .panel-adding {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 0 auto;
    text-align: center;
  }
  .panel-adding li {
    display: inline-block;
  }
  .panel-adding .item {
    cursor: pointer;
    position: relative;
    border: 0;
    border-radius: 50%;
    background-color: #bbcadb;
    padding: 5px;
    outline: 0;
    margin-bottom: 20px;
    margin-right: 15px;
    vertical-align: middle;
    display: inline-block;
    width: 42px;
    height: 42px;
    box-sizing: border-box;
    text-align: center;
  }
  .panel-adding .item:hover {
    background-color: #a7b8cc;
  }
  .panel-adding .item i {
    vertical-align: middle;
    display: block;
  }
  .i-sprite-add-text {
    background-image: url(/icons/i-sprite.png);
    background-position: -42px -381px;
    width: 32px;
    height: 32px;
  }
  .i-sprite-add-image {
    background-image: url(/icons/i-sprite.png);
    background-position: -359px -143px;
    width: 32px;
    height: 32px;
  }
  .i-sprite-add-video {
    background-image: url(/icons/i-sprite.png);
    background-position: -359px -101px;
    width: 32px;
    height: 32px;
  }
</style>
