<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <HeaderCmp/>
    <HomeCmp/>
    <div class="click" @click="increment">Click!</div>
    <div class="test">{{test}}</div>
    <div class="send" @click="send">Send!</div>
    <FooterCmp/>
  </div>
</template>

<script>
import store from '@/store'
import { postData } from './../utils/server-api'

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
  beforeCreate () {
    document.body.className = 'home'
  },
  data () {
    return {
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment', 1)
    },
    send () {
      var post = {
        name: 'user',
        password: 'password'
      }
      postData(post).then((response) => {
        if (response.access_token) {
          this.$store.commit('authenticated', {
            authenticated: true,
          })
          //this.$router.replace({ name: 'HomePage' })
        } else {
          //
        }
      })

    }
  },

  computed: {
    test () {
      return this.$store.state.test
    }
  }

}
</script>
