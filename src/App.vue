<template>
  <div id="app">    
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./styles/reset.css";
#app {
  //font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  //margin-top: 60px;

  //background: linear-gradient(to right, $primary, lighten($primary,30%));
  //background-color: darken($primary,10%);
  //background-color: lighten($primary,10%);
  background-image: url("./assets/logo.png"), linear-gradient(to right, $primary, lighten($primary,30%));;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  //background-size: 690px;
  background-attachment: fixed;
  height: 100vh;

}
</style>
