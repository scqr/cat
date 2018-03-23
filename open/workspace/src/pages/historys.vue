<template>
    <div class="c">
      <bTop></bTop>
      <history></history>
      <bottom></bottom>
    </div>
</template>

<script>
  import bTop from "../components/bTop";
  import history from "../components/history";
  import bottom from "../components/bottom";
    export default {
      components: {bTop,history,bottom},
        name: "historys"
    }
</script>

<style scoped>
.c{
  background:#ffffff;
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
}
</style>
