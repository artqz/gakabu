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

      reader.onload = (e) => {
        this.image = e.target.result
        image.onload = () => {
          if (image.width > 600) {
            var width = 600;
            var height = Math.round(image.height/(image.width/width))
          }
          else {
            var width = image.width
            var height = image.height
          }
          this.$emit('uploadItemImage', {
            type: 'create',
            itemId: this.id,
            preview: {
              base64: e.target.result,
              width: width,
              height: height
            }
          })
        }
        this.saveImage()
        image.src = e.target.result
      }
      reader.readAsDataURL(file)

    },
    saveImage () {
      return axios.post('http://localhost:8000/api/v1/file', {
        image: this.image
      })
      .then((res) => {
        console.log(res);
        this.$emit('uploadItemImage', {
          type: 'update',
          itemId: (this.itemId - 1),
          url: res.data
        })
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
