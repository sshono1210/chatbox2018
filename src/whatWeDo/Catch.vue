<template>
  <section class="c-catch">
    <img class="c-catch_logo" src="https://placehold.jp/150x150.png" alt="">
    <div class="c-catch_title">chatboxにできること</div>
    <div class="c-catch_angle">
      <!--TODO 一旦うまくいかないので無視-->
      <!--<div class="c-catch_angle_logo"></div>-->
    </div>
  </section>
</template>

<script>
export default {
}

</script>

<style lang="scss" scoped>
  .c-catch {
    position: relative;
    text-align: center;
  }
  .c-catch_logo {
    margin-top: 10px;
    width: 100px;
    height: 80px;
  }
  .c-catch_title {
    margin-top: 10px;
    margin-bottom: 16px;
    color: #B43B3E;
    font-size: 26px;
    letter-spacing: 6px;
  }
  .c-catch_angle {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 40px solid transparent;
    border-top: 40px solid #B43B3E;
    border-left: 40px solid #B43B3E;
  }
  /*TODO うまくいかないので一旦無視*/
  /*.c-catch_angle_logo {*/
    /*position: absolute;*/
    /*top: 2px;*/
    /*left: 2px;*/
    /*z-index: 100;*/
    /*width: 20px;*/
    /*height: 20px;*/
    /*border-radius: 2px;*/
    /*background-color: #FFF;*/
  /*}*/

</style>
