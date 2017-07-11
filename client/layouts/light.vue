<template>
  <div>
    <nav class="navbar">
      <ul class="menu">
        <li><router-link to="/feed">Лента</router-link></li>
        <li><router-link to="/best">Лучшее</router-link></li>
        <li><router-link to="/new">Новое</router-link></li>
        <li><router-link to="/users">Пользователи</router-link></li>
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
  font-family: -apple-system,BlinkMacSystemFont,Roboto,Open Sans,Helvetica Neue,sans-serif;
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
  background-color: #edeef0;;
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
.post {
  background-color: #fff;
  box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
}
.post-wrap {
  border-color: #e7e8ec;
}
</style>
