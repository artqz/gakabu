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
    },
    uploadImage (event) {
      var files = event.target.files || event.dataTransfer.files
      if (!files.length)
         return
      this.createImage(files[0])
    },
    createImage(file) {
      var img = new Image();
      var reader = new FileReader()
      var vm = this
      reader.onload = (e) => {
        vm.image = e.target.result
        img.src = vm.image;
        this.$emit('uploadImage', {
          id: this.itemId,
          value: vm.image,
          canvas: img.src,
          error: false
        })
        console.log(this);
        vm.saveImage(vm.image)
      };
      reader.readAsDataURL(file)

    },
    saveImage (image) {
      return axios.post('http://localhost:8000/api/v1/file', {
        image: image
      })
      .then((res) => {
        //this.$emit('uploadImage', {id: (this.itemId - 1), value: res.data, error: false})
      })
      .catch((error) => {
        console.log(1);
        //this.$emit('uploadImage', {id: (this.itemId - 1), value: null, error: true})
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
