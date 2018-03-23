<template>
  <div class="e">
    <top></top>
    <bRecommend></bRecommend>
    <Bottom></Bottom>
  </div>

</template>

<script>
  import top from "../components/top";
  import bRecommend from "../components/bRecommend";
  import Bottom from "../components/bottom";

  export default {
    components: {top,bRecommend,Bottom},
    name: "brecommend"
  }
</script>

<style scoped>
.e{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
}
</style>
