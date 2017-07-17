<template>
  <div class="field" contenteditable="true" :placeholder="textPlaceholder" @input="update" @keyup.13="enter"></div>
</template>

<script>
  export default {
    props: ['content', 'data'],
    data () {
      return {
        textPlaceholder: 'Введите текст...',
        showPlaceholder: true
      }
    },
    mounted () {
      console.log(this.$el.placeholder)
      if (this.content !== '') {
        this.$el.innerHTML = '<p>' + this.content + '</p>'
      }
    },
    methods: {
      update (event) {
        // console.log(this)
        this.$emit('update', event.target.innerHTML)
        if (event.target.innerText === '') {
          document.execCommand('formatBlock', false, 'p')
        }
      },
      enter () {
        document.execCommand('formatBlock', false, 'p')
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
