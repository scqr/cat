<template>
    <div class="b">
      <bTop></bTop>
      <collection></collection>
      <bottom></bottom>
    </div>
</template>

<script>
  import bTop from "../components/bTop";
  import collection from "../components/collection";
  import bottom from "../components/bottom";
    export default {
      components: {bTop,collection,bottom},
        name: "collections"
    }
</script>

<style scoped>
.b{
  background:#ffffff;
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
}
</style>
