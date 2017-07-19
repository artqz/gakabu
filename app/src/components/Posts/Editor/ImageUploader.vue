<template lang="html">
  <div class="image-uploader">
    <div class="item add-image" @click="addImage" title="Добавить изображение">
      <i class="i-sprite-add-image"></i>
    </div>
    <input ref="image" type="file" name="image" class="image-input" accept="image/*" multiple="" @change="uploadImage">
  </div>
</template>

<script>
export default {
  data () {
    return {
      image: ''
    }
  },
  methods: {
    addImage () {
      this.$refs.image.click()
    },
    uploadImage (e) {
      console.log(e);
    }
  }
}
</script>

<style lang="css">
.image-input {
  display: none;
}
</style>
