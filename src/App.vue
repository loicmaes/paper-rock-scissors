<template>
  <router-view/>
</template>

<style lang="scss">
@use './assets/css/variables';
@forward "./assets/css/master/reset";

#app {
  width: 100%;
  height: 100vh;
  position: relative;
  color: variables.$text;
  background-image: variables.$background;

  main {
    width: 100%;
    height: 100%;
  }
}
</style>
