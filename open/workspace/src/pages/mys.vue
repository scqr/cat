<template>
  <div class="three">
    <mTop></mTop>
    <my></my>
    <bottom></bottom>
  </div>
</template>

<script>
  import mTop from "../components/mTop";
  import my from "../components/my";
  import Bottom from "../components/bottom";
    export default {
      components: {mTop,my,Bottom},
        name: "mys"
    }
</script>

<style scoped>
.three{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
}
</style>
