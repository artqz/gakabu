<template lang="html">
  <div class="image-uploader">
    <div class="item add-image" @click="addImage" title="Добавить изображение">
      <i class="i-sprite-add-image"></i>
    </div>
    <input ref="image" type="file" name="image" class="image-input" accept="image/*" @change="uploadImage">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      image: ''
    }
  },
  props: ['itemId'],
  methods: {
    addImage () {
      this.$refs.image.click()
      this.$emit('addImage', null)
    },
    uploadImage (event) {
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
        this.$emit('uploadImage', {
          base64: base64
        })
        /*
        console.log(this);
        image.onload = () => {
          if (image.width > 600) {
            var width = 600;
            var height = Math.round(image.height/(image.width/width))
          }
          else {
            var width = image.width
            var height = image.height
          }
          this.$emit('uploadImage', {id: this.itemId, width: width, height: height, canvas: image, uploaded: false, error: false})
        }
        */
        image.src = e.target.result
        //vm.saveImage(vm.image)

      /*
      reader.onload = (e) => {
        vm.image = e.target.result
        this.$emit('uploadImage', {
          id: this.itemId,
          value: vm.image,
          canvas: vm.image,
          error: false
        })
        */
        //
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
