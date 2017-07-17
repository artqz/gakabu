<template>
  <div class="field" contenteditable="true" placeholder="Введите текст..." @input="update" @keyup.13="enter"></div>
</template>

<script>
  export default {
    props: ['content', 'data'],
    mounted () {
      if (this.content !== '') {
        this.$el.innerHTML = '<p>' + this.content + '</p>'
      }
    },
    methods: {
      update (event) {
        this.$emit('update', event.target.innerText)
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
