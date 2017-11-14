<template>
  <section class="c-footer">
    <div class="c-contact_info c-balloon_nozzle">
      <div>
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
        お問い合わせはこちら
      </div>
    </div>
    <div class="c-content_contact c-content_contact_bg c-footer_inner">
      <span class="square"></span>
      <div class="c-contact_title">Webにまつわるお悩み、ご相談はお気軽にchatboxまで。</div>
      <div class="c-form_btn">
        <div>

            <span>お問い合わせフォームへ</span>
          <i class="fa fa-angle-right fa-lg" aria-hidden="true"></i>
        </div>
      </div>
      <div class="c-contact_tel">
        <div>お電話でのお問い合わせ</div>
        <a href="tel:050-2555-1212">050-2555-1212</a>
      </div>
    </div>
    <ul>
      <li><a href="#">chatboxについて</a></li>
      <li><a href="#">サービス</a></li>
      <li><a href="#">メンバー</a></li>
      <li><a href="#">お問い合わせ</a></li>
      <div></div>
    </ul>
    <div class="c-footer_content c-footer_inner">
      <div class="c-chatbox_copy">
        <i class="fa fa-window-close-o fa-lg" aria-hidden="true"></i>
        <small>Copyright © chatbox.inc All Rights Reserved.</small>
      </div>
      <div class="c-sns_content">
        <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
        <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
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
  .c-footer_inner{
    padding: 0 3% 3%;
  }
  a{
    color: #B43B3E;
    &:hover{
      text-decoration: none;
      opacity: 0.7;
    }
  }
  .c-contact_info{
    margin: 3% 0;
    color: #B43B3E;
  }
  .c-content_contact{
    color: #fff;
    letter-spacing: 2px;
    div:nth-child(1){
      font-size: 110%;
      line-height: 1.8;
      margin: 3%;
    }
  }
  .c-content_contact_bg{
    background-color: #B43B3E;
    span.square{
      display: inline-block;
      vertical-align: top;
      height: 0;
      border: 20px solid transparent;
      border-top: 14px solid #fff;
      font-weight: 600;
    }
    & c-form_btn{
      margin-bottom: 4%;
    }
  }

  .c-form_btn{
    margin: 0 auto;
    position: relative;
    span{
      padding: 7%;
      display: inline-block;
    }
    & i{
      margin-top: 6%;
      padding-left: 9%;
    }
    div{
      border-radius: 6px;
      background-color: #fff;
      color: #B43B3E;
      width: 90%;
      display: inline-block;
    }
  }
  .c-contact_tel{
    font-family: YuGothic;
    margin: 5%;
    div:nth-child(1){
      margin: 0;
    }
    a{
      color: #fff;
      font-size: 180%;
    }
  }
  ul.footer li {
    display: inline;
    text-align: center;
    a{
      color: #B43B3E;
    }
  }
  ul{
    list-style: none;
    margin-top: 3%;
    padding: 0 3%;
    div{
      border-bottom: solid 1px #B43B3E;
      width: 100%;
      margin: 4% auto 0;
    }
  }
  ul li:first-child{
      padding-left: 0;
  }
  li {
    display: inline;
    text-align: center;
    width:(100% / 4);
    color: #B43B3E;
    font-size: 84%;
    padding-left: 4%;
    font-weight: 600;

  }
  .c-footer_content{
    color: #B43B3E;
    small{
      font-size: 50%;
    }
  }
  .c-chatbox_copy{
    text-align: left;
    width: 70%;
    display: inline-block;
  }
  .c-sns_content{
    text-align: right;
    width: 28%;
    display: inline-block;
    i{
      margin-left: 10%;
    }
  }
  /* pc */
  @media screen and (min-width: 768px) {
      /* footer */
    .c-footer_inner{
    padding: 0 3% 5%;
    }
    .c-contact_info{
      font-weight: normal;
      font-size: 110%;
      margin: 1% 0;
      padding-left: 2%;
      i{
        padding-right: 1%;
      }
    }
    .c-contact_title{
      font-size: 140%;
      margin-top: 4%;
    }
    .c-form_btn{
      margin-left: 0;
      width: 45%;
      display: inline-block;
      margin-top: 3%;
      span{
        font-weight: 600;
      }
      & div{
        padding-bottom: 0;
      }
      i{
        padding-left: 0;
        vertical-align: baseline;
      }
    }
    .c-contact_tel{
      text-align: left;
      vertical-align: middle;
      width: 30%;
      display: inline-block;
      margin: 0;
    }
    ul{
      text-align: left;
      li{
        font-weight: normal;
      }
      div{
        margin: 2% 0;
      }
    }
    .c-footer_content small{
      font-size: 80%;
    }
    .c-sns_content i{
      margin-left: 4%;
    }
  }
</style>
