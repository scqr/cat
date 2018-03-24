<template>
  <div class="one">
    <top></top>
    <keep-alive>
      <bookcity></bookcity>
    </keep-alive>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import top from "../components/top";
  import bookcity from "../components/bookcity";
  import Bottom from "../components/bottom";

    export default {
      components: {top,bookcity,Bottom},
      name: "bookcitys"
    }
</script>

<style scoped>
  .one{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
  }
</style>
