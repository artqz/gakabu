<template>
  <div class="container">
    123
    <ul class="users">
      <li v-for="user in users">
        <nuxt-link :to="'/users/'+user.id" :id="123">{{ user.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'light',
  asyncData () {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      return { users: res.data }
    })
  }
}
</script>
