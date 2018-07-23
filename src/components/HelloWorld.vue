<template>
<<<<<<< HEAD
  <div class='hello'>
=======
  <div class="hello">
>>>>>>> tsc setup
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
<<<<<<< HEAD
          href='https://vuejs.org'
target='_blank'
=======
          href="https://vuejs.org"
          target="_blank"
>>>>>>> tsc setup
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
<<<<<<< HEAD
          href='https://forum.vuejs.org'
target='_blank'
=======
          href="https://forum.vuejs.org"
          target="_blank"
>>>>>>> tsc setup
        >
          Forum
        </a>
      </li>
      <li>
        <a
<<<<<<< HEAD
          href='https://chat.vuejs.org'
target='_blank'
=======
          href="https://chat.vuejs.org"
          target="_blank"
>>>>>>> tsc setup
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
<<<<<<< HEAD
          href='https://twitter.com/vuejs'
target='_blank'
=======
          href="https://twitter.com/vuejs"
          target="_blank"
>>>>>>> tsc setup
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
<<<<<<< HEAD
          href='http://vuejs-templates.github.io/webpack/'
target='_blank'
=======
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
>>>>>>> tsc setup
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
<<<<<<< HEAD
          href='http://router.vuejs.org/' {
            target='_blank'
=======
          href="http://router.vuejs.org/"
          target="_blank"
>>>>>>> tsc setup
        >
          vue-router
        </a>
      </li>
      <li>
        <a
<<<<<<< HEAD
          href
          }='http://vuex.vuejs.org/'
target='_blank'
=======
          href="http://vuex.vuejs.org/"
          target="_blank"
>>>>>>> tsc setup
        >
          vuex
        </a>
      </li>
      <li>
        <a
<<<<<<< HEAD
          href='http://vue-loader.vuejs.org/'
target='_blank'
=======
          href="http://vue-loader.vuejs.org/"
          target="_blank"
>>>>>>> tsc setup
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
<<<<<<< HEAD
          href='https://github.com/vuejs/awesome-vue'
target='_blank'
=======
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
>>>>>>> tsc setup
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<<<<<<< HEAD
<script lang='ts'>
// export default {
//   name: 'HelloWorld',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   }
// }
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  msg: string = 'Hello World'


  mounted () {
    console.log('mounted.');
=======
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HelloWorld extends Vue {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
>>>>>>> tsc setup
  }
}
</script>

<<<<<<< HEAD
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal
=======
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
>>>>>>> tsc setup
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
