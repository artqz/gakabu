<template>
  <div>
    <nav class="navbar">
      <ul class="menu">
        <li><nuxt-link to="feed">Лента</nuxt-link></li>
        <li><nuxt-link to="best">Лучшее</nuxt-link></li>
        <li><nuxt-link to="new">Новое</nuxt-link></li>
        <li><nuxt-link to="users">Пользователи</nuxt-link></li>
      </ul>
    </nav>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body
{
  background-color: #111111;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
.navbar
{
  overflow: hidden;
  background-color: #232323;
  line-height: 3;
  padding: 0 20px 0 20px;
}
.navbar .menu
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar .menu li {
  float: left;
  /*padding: 0 10px 0 10px;*/
}
.navbar .menu li:hover {
  background-color: #2d2d2d;
}
.navbar .menu li a {
  color: #fff;
  text-decoration: none;
  line-height: 3;
  padding: 0 10px 0 10px;
  display: inline-block;
}
.navbar .menu li a.active {
  color: red;
}
.container {
  margin: 20px;
}
</style>
