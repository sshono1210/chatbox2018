<template>
  <section class="p-website">
    <div class="c-block">
      <div class="c-block_number">03</div>
      <div class="c-block_container">
        <p class="c-block_title">
          技術顧問
          <span>最新技術でしっかりサポート</span>
        </p>
        <div class="c-block_container_inner">
          <div class="c-balloon">
            <div class="c-balloon_text">スマートフォン対応がしたい</div>
            <div class="c-balloon_nozzle"><span></span></div>
          </div>
          <div class="c-balloon">
            <div class="c-balloon_text">大規模サイトでスタイルガイドでCSSを管理したい</div>
            <div class="c-balloon_nozzle"><span></span></div>
          </div>
          <div class="c-balloon">
            <div class="c-balloon_text">プログレッシブWebにしたい</div>
            <div class="c-balloon_nozzle"><span></span></div>
          </div>
          <div class="c-balloon">
            <div class="c-balloon_text">サイトの高速化に対応したい</div>
            <div class="c-balloon_nozzle"><span></span></div>
          </div>
          <p class="c-block_sum">
            複雑化するシステム構築の課題を、
            最新の制作技術でしっかりサポート
          </p>
          <p class="c-block_desc">
            <span>複雑化するシステム構築の課題</span>を、<span>最新の制作技術でしっかりサポート</span>多様化するニーズや、複雑化するシステム構築の課題を、最新の制作技術でしっかりサポート。Web制作に関するあらゆる相談に対応出来るよう、<span>経験豊富なスタッフが親身に対応にあたります。</span>
          </p>
          <div class="c-block_label">導入事例</div>
          <div class="c-block_case">
            Webサイト制作 / Webサイト制作 / Webサイト制作 / Webサイト制作 / Webサイト制作
          </div>
          <div class="c-block_button">
            <a href="#" class="c-arrowButton">
              <div class="c-arrowButton_container">
                <span>詳細を見る</span><span></span>
              </div>
            </a>
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
  .c-block_container_inner {
    padding: 0 10px;
  }
  .c-block_sum {
    font-size: 24px;
    color: #B43B3E;
    text-align: center;
  }
  .c-block_desc {
    font-size: 20px;
    text-align: left;
    line-height: 36px;
    span {
      font-weight: bold;
    }
  }
  .c-block_label {
    background-color: #F5F1F1;
    padding: 6px 0;
    font-size: 18px;
  }
  .c-block_case {
    text-align: justify;
    line-height: 28px;
    letter-spacing: 1px;
    padding-top: 10px;
    padding-bottom: 30px;
  }
  .c-block_button {
    text-align: right;
    margin-bottom: 20px;
  }

  .c-balloon {
    display: inline-block;
  }
  .c-balloon_text {
    background-color: #F5F1F1;
    padding: 6px 12px;
    display: inline-block;
    text-align: left;
  }
  .c-balloon_nozzle {
    span {
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-top: 10px solid #F5F1F1;
      display: inline-block;
    }
  }

  .c-arrowButton {
    display: inline-block;
  }
  .c-arrowButton_container {
    display: flex;
    span:nth-child(1) {
      background-color: #B43B3E;
      color: #fff;
      font-size: 18px;
      padding: 18px 40px 18px 50px;
      display: inline-block;
    }
    span:nth-child(2) {
      width: 0;
      height: 0;
      border: 32px solid transparent;
      border-left: 16px solid #B43B3E;
      display: inline-block;
    }

  }

</style>
