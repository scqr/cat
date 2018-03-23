<template>
  <div class="f">
    <top></top>
    <bList></bList>
    <Bottom></Bottom>
  </div>

</template>

<script>
  import top from "../components/top";
  import bList from "../components/bList";
  import Bottom from "../components/bottom";

  export default {
    components: {top,bList,Bottom},
    name: "blist"
  }
</script>

<style scoped>
.f{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
}
</style>
