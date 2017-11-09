import Vue from 'vue'
import "./common.scss";
// import App from './__App.vue'
import Catch from './whatWeDo/Catch.vue'
import Hero from './whatWeDo/Hero.vue'
import Website from './whatWeDo/Website.vue'
import System from './whatWeDo/System.vue'
import Advisor from './whatWeDo/Advisor.vue'
import Event from './whatWeDo/Event.vue'
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
  el: '#system',
  render: h => h(System),
});
new Vue({
  el: '#advisor',
  render: h => h(Advisor),
});
new Vue({
  el: '#event',
  render: h => h(Event),
});
new Vue({
  el: '#footer',
  render: h => h(Footer),
});
