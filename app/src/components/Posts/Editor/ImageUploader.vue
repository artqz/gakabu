<template lang="html">
  <div class="image-uploader">
    <div class="item add-image" @click="addImage" title="Добавить изображение">
      <i class="i-sprite-add-image"></i>
    </div>
    <input ref="image" type="file" name="image" class="image-input" accept="image/*" multiple="" @change="uploadImage">
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
  methods: {
    addImage () {
      this.$refs.image.click()
    },
    uploadImage (event) {
      //console.log(event.target.value);
      this.saveImage(event.target.value)
    },
    saveImage (params, error) {
      // console.log(value)
      return axios.post('http://localhost:8000/api/v1/file', {
        value: 'value'
      })
      .then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="css">
.image-input {
  display: none;
}
</style>
