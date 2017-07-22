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
        <li class="item" :ref="'item-'+index" v-for="(item, index) in editor.bodyItems">
          <div class="item-text" v-if="item.type == 'text'">
            <medium-editor :id="index" :text='item.value' :options="options" custom-tag='div' v-on:edit='processEditOperation' />
          </div>
          <div :ref="'itemImage-'+item.id" class="item-image" v-if="item.type == 'image'">
            <div class="item-preview"></div>
            <img :src="item.url">
          </div>
          <div class="item-video" v-if="item.type == 'video'">
            video
          </div>
          <div :id="index" @click="deleteItem">
            delete
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
          <image-uploader :itemId="editor.bodyItems.length" @addItemImage="addItemImage" @uploadItemImage="uploadItemImage" />
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
      <img :src="image" alt="">
      Настройки {{editor}}
    </div>
  </div>
</template>

<script>
  import editor from 'vue2-medium-editor'
  import ImageUploader from '../../components/Posts/Editor/ImageUploader.vue'

  export default {
    components: {
      'medium-editor': editor,
      'image-uploader': ImageUploader
    },
    data () {
      return {
        image: '',
        editor: {
          title: '',
          gameId: '',
          gameTitle: '',
          bodyItems: [
            {type: 'text', id: Date.now(), value: ''}
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
      deleteItem () {
        var itemId = event.target.id

        this.editor.bodyItems.splice(itemId, 1)
      },
      addItem (type) {
        if (type == 'text') {
          this.editor.bodyItems.push({type: 'text', id: Date.now(), value: ''})
        }
      },
      processEditOperation (operation) {
        var itemId = operation.event.target.id
        this.editor.bodyItems[itemId].value = operation.event.srcElement.innerHTML
      },
      addItemImage (itemId) {
        console.log(itemId);
        this.editor.bodyItems.push({type: 'image', id: itemId, url: '', preview: false})
      },
      uploadItemImage (item) {
        if (item.type == 'create') {
          var itemImageRef = 'itemImage-' + item.itemId
          this.$refs[itemImageRef][0].style.width = item.preview.width + 'px'
          this.$refs[itemImageRef][0].style.height = item.preview.height + 'px'
          this.$refs[itemImageRef][0].firstChild.style.backgroundImage = 'url(' + item.preview.base64 + ')'
          this.$refs[itemImageRef][0].firstChild.style.backgroundSize = item.preview.width + 'px, ' + item.preview.height + 'px'
          this.editor.bodyItems[item.itemId].preview = true
        }
        else if (item.type == 'update') {
          console.log(item);
          this.editor.bodyItems[item.itemId].url = item.url
        }
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
  .item-image {
    position: relative;
    overflow:hidden
  }
  .item-preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(4px);
    opacity: .8;
  }
  .item {
    margin-bottom: 0;
  }
  .item-text .medium-editor-element {
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
  .item-text .medium-editor-element p {

  }
  .item-text .medium-editor-element:focus {
    outline: none;
  }
  .item-text .medium-editor-element blockquote {
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
