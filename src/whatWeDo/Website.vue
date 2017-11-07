<template>
  <section class="p-website">
    <div class="c-block">
      <div class="c-block_number">01</div>
      <div class="c-block_container">
        <p class="c-block_title">
          Web制作
          <span>最新技術でしっかりサポート</span>
        </p>
        <!--<img src="https://placehold.jp/150x150.png" class="c-block_thumb">-->
        <p class="c-block_sum">
          複雑化するシステム構築の課題を、<br>
          最新の制作技術でしっかりサポート
        </p>
        <p class="c-block_desc">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
  }

</script>

<style lang="scss" scoped>
  .c-block {
    text-align: center;
    padding-top: 30px;
  }
  .c-block_container {
    background-color: #fff;
  }
  .c-block_number {
    padding-top: 8px;
    margin-left: auto;
    margin-right: auto;
    background-color: #B43B3E;
    width: 76px;
    height:38px;
    border-radius:38px 38px 0 0;
    color: #FFF;
    text-align: center;
  }
  /*.c-block_thumb {*/
    /*width: 100%;*/
    /*height: 80px;*/
  /*}*/
  .c-block_title {
    padding-top: 10px;
    padding-bottom: 16px;
    font-weight: bold;
    font-size: 30px;
    color: #fff;
    background-image: url("https://placehold.jp/150x150.png");
    background-size: cover;
    span {
      display: block;
      font-size: 20px;
      font-weight: normal;
    }
  }
  .c-block_sum {
    font-size: 24px;
    color: #B43B3E;
    text-align: center;
  }
  .c-block_desc {
    padding: 0 8px 8px 8px;
    text-align: left;
  }


</style>
