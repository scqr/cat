<template>
    <div class="a">
      <bTop></bTop>
      <download></download>
      <bottom></bottom>
    </div>
</template>

<script>
  import bTop from "../components/bTop";
  import download from "../components/download";
  import bottom from "../components/bottom";
    export default {
      components: {bTop,download,bottom},
        name: "downloads"
    }
</script>

<style scoped>
.a{
  background:#ffffff;
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
}
</style>
