import Vue from 'vue'
// import App from './__App.vue'
import Catch from './whatWeDo/Catch.vue'
import Hero from './whatWeDo/Hero.vue'
import Website from './whatWeDo/Website.vue'
import Footer from './Footer.vue'

new Vue({
  el: '#catch',
  render: h => h(Catch),
});
new Vue({
  el: '#hero',
  render: h => h(Hero),
});
new Vue({
  el: '#website',
  render: h => h(Website),
});
new Vue({
  el: '#footer',
  render: h => h(Footer),
});
