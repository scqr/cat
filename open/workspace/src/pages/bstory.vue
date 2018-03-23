<template>
  <div class="d">
    <top></top>
    <bStory></bStory>
    <Bottom></Bottom>
  </div>

</template>

<script>
  import top from "../components/top";
  import bStory from "../components/bStory";
  import Bottom from "../components/bottom";

  export default {
    components: {top,bStory,Bottom},
    name: "bstory"
  }
</script>

<style scoped>
.d{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
}
</style>
