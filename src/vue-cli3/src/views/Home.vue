<template>
  <div>
    <Header />
    <Main>
      <About />
      <Activities />
      <Products />
      <Members />
      <Contacts />
    </Main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'
import Activities from '@/components/Activities.vue'
import Products from '@/components/Products.vue'
import Members from '@/components/Members.vue'
import Contacts from '@/components/Contacts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Main,
    About,
    Activities,
    Products,
    Members,
    Contacts,
    Footer
  }
}
</script>
