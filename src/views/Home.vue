<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <HeaderCmp/>
    <HomeCmp/>
    <div class="click" @click="increment">Click!</div>
    <div class="test">{{test}}</div>
    <FooterCmp/>
  </div>
</template>

<script>
import store from '@/store'

// @ is an alias to /src
import HeaderCmp from '@/components/HeaderCmp.vue'
import HomeCmp from '@/components/HomeCmp.vue'
import FooterCmp from '@/components/FooterCmp.vue'

export default {
  name: 'home',
  store,
  components: {
    HeaderCmp,
    HomeCmp,
    FooterCmp
  },
  data () {
    return {
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment', 1)
    }
  },

  computed: {
    test () {
      return this.$store.state.test
    }
  }

}
</script>
