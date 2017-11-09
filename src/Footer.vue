<template>
  <section class="c-footer">
    <div class="c-contact_info c-balloon_nozzle">お問い合わせはこちら</div>
    <span></span>
    <div class="c-content_contact c-content_contact_bg">
      <div>Webにまつわるお悩み、ご相談はお気軽にchatboxまで。</div>
      <div class="c-form_btn"><span>お問い合わせフォームへ</span></div>
      <div class="c-contact_tel">
        <p>お電話でのお問い合わせ</p>
        <a href="tel:050-2555-1212">050-2555-1212</a>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
  }

</script>

<style lang="scss" scoped>
  .c-footer {
    text-align: center;
  }
  .c-content_contact{
    color: #fff;
    div:nth-child(1){
      font-size: 110%;
      line-height: 1.8;
      margin: 10px;
    }
  }
  .c-balloon_nozzle_text {
    span {
      width: 0;
      height: 0;
      display: inline-block;
      border: 40px solid transparent;
      border-top: 40px solid #fff;
    }
  }
  .c-content_contact_bg{
    background-color: #B43B3E;
  }
  .c-form_btn{
    margin: 0 auto;
    span{
      border-radius: 6px;
      padding: 4%;
      background-color: #fff;
      color: #B43B3E;
      width: 80%;
      display: inline-block;
    }
  }
  .c-contact_tel{
    margin: 5%;
    a{
      color: #fff;
      font-size: 180%;


    }
  }
</style>
