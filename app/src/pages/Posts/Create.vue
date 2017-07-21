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
        <li :class="'item-'+index" :ref="'item-'+index" v-for="(items, index) in editor.bodyItems">
          <div class="item-text" v-if="items.type == 'text'">
            <medium-editor :id="index" :text='items.value' :options="options" custom-tag='div' v-on:edit='processEditOperation' />
          </div>
          <div class="item-image" v-if="items.type == 'image'">
            <img :ref="'img-'+items.imageId">
            {{items}}
            <div :id="index+'-'+items.imageId" @click="deleteItem">
              удалить
            </div>
          </div>
          <div class="item-vide" v-if="items.type == 'video'">
            video
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
          <image-uploader :itemId="editor.indexItems" v-on:uploadImage="uploadImage" />
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
        editor: {
          title: '',
          gameId: '',
          gameTitle: '',
          indexItems: 1,
          bodyItems: [
            {type: 'text', value: ''}
          ]
        },
        files: [],
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
        var itemId = event.target.id.split('-')[0]

        this.editor.bodyItems.splice(itemId, 1)
      },
      addItem (type) {
        if (type == 'text') {
          this.editor.bodyItems.push({type: 'text', value: ''})
        }
      },
      processEditOperation (operation) {
        var itemId = operation.event.target.id
        this.editor.bodyItems[itemId].value = operation.event.srcElement.innerHTML
      },
      uploadImage (image) {
          console.log(image)
          this.editor.bodyItems.push({
            type: 'image',
            value: image,
          })
        /*
        console.log(image);
        if (!image.uploaded && !image.error) {
          this.editor.indexItems += 1
          this.editor.bodyItems.push({
            type: 'image',
            imageId: image.id,
            uploaded: false,
            value: 1,
            convas: image,
            error: false
          })

          this.$nextTick(function () {
            var imgId = 'img-' + image.id
            var img = this.$refs[imgId][0]
            img.setAttribute('src', image.canvas.src);
            /*
            var canvasId = 'canvas-' + image.id
            var canvas = this.$refs[canvasId][0]
            var ctx = canvas.getContext("2d");

            canvas.width = image.width
            canvas.height = image.height
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image.canvas, 0, 0, image.width, image.height);
            ctx.save();

          })
        }
        else if (image.uploaded && !image.error) {
          this.editor.bodyItems[image.id].value = image.value
          this.editor.bodyItems[image.id].uploaded = image.uploaded
        }
        /*
        this.editor.bodyItems.push({
          type: 'image',
          uploaded: false,
          value: image.value,
          canvas: image.canvas,
          error: false
        }).bind((res) => {
          console.log(1);
        })
        */
        //console.log(this.editor.bodyItems);
        //console.log(image.id);
        //var canvasId = 'canvas-'+2
        //console.log(this.$refs[canvasId]);
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
  .image-loading {
    width: 100%;
    background-color: #bbcadb;
    line-height: 100px;
    min-height: 100px;
    text-align: center;
  }
  .image-loading .error {
    color: #65707d;
  }
  .image-loading .icon {
    width: 100%;
    min-height: 100px;
    background-image: url('/icons/image.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 68px, 68px;
    opacity: 1;
    animation: opacity 3s infinite;
  }
  @keyframes opacity {
    0%, 100%    { opacity: 1; }
    50%   { opacity: .5; }
  }
</style>
