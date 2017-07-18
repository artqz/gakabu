<template>
  <div class="field" contenteditable="true" :placeholder="textPlaceholder" v-once @input="update" @keyup.13="enter" @paste="test($event)" v-html="text" @change="text"></div>
</template>

<script>
  export default {
    props: ['content'],
    data () {
      return {
        text: '',
        textPlaceholder: 'Введите текст...',
        showPlaceholder: true
      }
    },
    mounted () {
      if (this.content !== '') {
        this.text = '<p>' + this.content + '</p>'
      }
    },
    methods: {
      update () {
        console.log(event)
        this.text = this.stripTags(event.target.innerHTML)
        this.$emit('update', this.text)
        // console.log(content)
        // this.$emit('update', this.stripTags(event.target.innerText))
        // if (event.target.innerText === '') {
        //  document.execCommand('formatBlock', false, 'p')
        // }
      },
      enter () {
        document.execCommand('formatBlock', false, 'p')
      },
      test (event) {
        // var length = ele.html().length
        // ele.focus()
        console.log(this.$el)
      },
      stripTags (str) {
        // remove BR tags and replace them with line break
        str = str.replace(/<br>/gi, '\n')
        str = str.replace(/<br\s\/>/gi, '\n')
        str = str.replace(/<br\/>/gi, '\n')

        // remove P and A tags but preserve what's inside of them
        str = str.replace(/<p>/gm, '')
        str = str.replace(/<\/p>/gm, '')
        str = str.replace(/<h3.*>/gm, '')
        str = str.replace(/<\/h3>/gm, '')
        str = str.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, ' $2 ($1)')
        return str
      }
    }
  }
</script>

<style lang="css">
.field[placeholder]:empty:before {
    content: attr(placeholder);
    color: #757575;
}
</style>
