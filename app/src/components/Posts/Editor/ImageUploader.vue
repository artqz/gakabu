<template lang="html">
  <div class="image-uploader">
    <div class="item add-image" @click="addItemImage" title="Добавить изображение">
      <i class="i-sprite-add-image"></i>
    </div>
    <input ref="image" type="file" name="image" class="image-input" accept="image/*" @change="uploadItemImage">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      image: '',
      id: ''
    }
  },
  props: ['itemId'],
  methods: {
    addItemImage () {
      this.id = this.itemId
      this.$refs.image.click()
    },
    uploadItemImage (event) {
      this.$emit('addItemImage', this.id)
      var files = event.target.files || event.dataTransfer.files
      if (!files.length)
         return
      this.createImage(files[0])
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        this.image = e.target.result
        let [, base64] = this.image.split(',')
        this.$emit('uploadItemImage', {
          itemId: this.id,
          file: file
        })
      }
      reader.readAsDataURL(file)

    },
    saveImage (image) {
      return axios.post('http://localhost:8000/api/v1/file', {
        image: image
      })
      .then((res) => {
        console.log(1);
        this.$emit('uploadImage', {id: (this.itemId - 1), value: res.data, error: false, uploaded: true})
      })
      .catch((error) => {
        console.log(1);
        this.$emit('uploadImage', {id: (this.itemId - 1), value: null, error: true})
      });
    }
  }
}
</script>

<style lang="css">
.image-input {
  display: none;
}
</style>
