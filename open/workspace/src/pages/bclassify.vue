<template>
  <div class="g">
    <top></top>
    <bClassify></bClassify>
    <Bottom></Bottom>
  </div>

</template>

<script>
  import top from "../components/top";
  import bClassify from "../components/bClassify";
  import Bottom from "../components/bottom";

  export default {
    components: {top,bClassify,Bottom},
    name: "bclassify"
  }
</script>

<style scoped>
.g{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
}
</style>
