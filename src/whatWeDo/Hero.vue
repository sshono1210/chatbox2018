<template>
  <section class="p-hero">
    <img class="p-hero_baseImage" src="https://placehold.jp/150x90.png">
    <div class="p-hero_content">
      <div class="p-hero_heading">
        「作る」だけじゃなく、<br>
        「伝える」「語り合う」
      </div>
      <div class="p-hero_desc">
        「作る」だけじゃなく、「伝える」「語り合う」
      </div>
      <div class="p-hero_media">
        <div class="c-media">
          <div class="c-media_number">01</div>
          <div class="c-media_container">
            <p class="c-media_title">Web制作</p>
            <img src="https://placehold.jp/150x150.png" class="c-media_thumb">
            <p class="c-media_sum">
              最新技術で<br>
              しっかりサポート
            </p>
            <p class="c-media_desc">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。</p>
          </div>
        </div>
        <div class="c-media">
          <div class="c-media_number">01</div>
          <div class="c-media_container">
            <p class="c-media_title">Web制作</p>
            <img src="https://placehold.jp/150x150.png" class="c-media_thumb">
            <p class="c-media_sum">
              最新技術で<br>
              しっかりサポート
            </p>
            <p class="c-media_desc">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。</p>
          </div>
        </div>
        <div class="c-media">
          <div class="c-media_number">01</div>
          <div class="c-media_container">
            <p class="c-media_title">Web制作</p>
            <img src="https://placehold.jp/150x150.png" class="c-media_thumb">
            <p class="c-media_sum">
              最新技術で<br>
              しっかりサポート
            </p>
            <p class="c-media_desc">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。</p>
          </div>
        </div>
        <div class="c-media">
          <div class="c-media_number">01</div>
          <div class="c-media_container">
            <p class="c-media_title">Web制作</p>
            <img src="https://placehold.jp/150x150.png" class="c-media_thumb">
            <p class="c-media_sum">
              最新技術で<br>
              しっかりサポート
            </p>
            <p class="c-media_desc">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。</p>
          </div>
        </div>
      </div>
    </div>



  </section>
</template>

<script>
  export default {
  }

</script>

<style lang="scss" scoped>
  .p-hero {
    position: relative;
    height: 1130px;
  }
  .p-hero_baseImage {
    background-image: url('https://placehold.jp/150x150.png');
    width: 100%;
  }
  .p-hero_content {
    position: absolute;
    height: 1130px;
    left: 0;
    top: 0;
    background: rgba(195,80,79,0.65);;
    /*background-color: #C3504F;*/
    /*opacity: 0.65;*/
  }
  .p-hero_heading {
    padding-top: 40px;
    text-align: center;
    color: #FFF;
    font-size: 24px;
    letter-spacing: 6px;
  }
  .p-hero_desc {
    margin-top: 10px;
    text-align: center;
    color: #FFF;
    letter-spacing: 2px;
  }
  .p-hero_media {
    margin-top: 30px;
    text-align: center;
  }

  .c-media {
    width: 44%;
    display: inline-block;
    &:nth-child(odd) {
      padding-right: 4px;
    }
    &:nth-child(even) {
      padding-left: 4px;
    }
  }
  .c-media_container {
    background-color: #fff;
  }
  .c-media_number {
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
  .c-media_thumb {
    width: 100%;
  }
  .c-media_title {
    padding-top: 8px;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 20px;
  }
  .c-media_sum {
    margin-top: 8px;
    margin-bottom: 8px;
    font-weight: bold;
  }
  .c-media_desc {
    padding: 0 8px 8px 8px;
    text-align: left;
  }


</style>
