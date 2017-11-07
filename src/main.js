import Vue from 'vue'
// import App from './__App.vue'
import Catch from './whatWeDo/Catch.vue'
import Footer from './Footer.vue'

new Vue({
  el: '#catch',
  render: h => h(Catch),
});
new Vue({
  el: '#footer',
  render: h => h(Footer),
});
