<template>
  <div id="post-create">
    <div class="post-title">
      Заголовок
    </div>
    <div class="post-game">
      Выбор игры
    </div>
    <div class="post-body">
      <ul class="fields-list">
        <li class="field" v-for="(field, index) in editor.bodyFields">
          <div class="field-input" v-if="field.type == 'text'">
            <medium-editor :text='field.value' :options="options" custom-tag='div' v-on:edit='processEditOperation' />
          </div>
          <div v-if="field.type == 'image'">
            <img :src="field.value" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="post-tags">
      Тэги
    </div>
    <div class="post-settings">
      Настройки {{text}}
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
          bodyFields: [
            {type: 'text', value: '1'}
          ]
        },
        options: {
          toolbar: {
            buttons: ['bold', 'strikethrough', 'h1']
          }
        },
        text: ''
      }
    },
    methods: {
      processEditOperation (operation) {
        console.log(operation);
        // this.editor.bodyFields[0].value = event.event.target.innerText
        this.editor.bodyFields[0].value = operation.event.srcElement.innerHTML
      }
    }
  }
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.22.1/css/medium-editor.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/medium-editor/5.22.1/css/themes/flat.css">
<style>
</style>
