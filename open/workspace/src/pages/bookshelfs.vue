<template>
  <div class="two">
    <bTop></bTop>
    <bookshelf></bookshelf>
    <Bottom></Bottom>
  </div>

</template>

<script>
  import bTop from "../components/bTop";
  import bookshelf from "../components/bookshelf";
  import Bottom from "../components/bottom";

  export default {
    components: {bTop,bookshelf,Bottom},
    name: "bookshelfs"
  }
</script>

<style scoped>
.two{
  background:#ffffff;
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
}
</style>
