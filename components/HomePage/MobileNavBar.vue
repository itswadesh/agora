<template>
  <div class="z-20 flex flex-col w-full h-auto bg-primary-500">
    <div class="flex flex-row justify-between p-1 m-2 conatiner">
      <div class="flex flex-row">
        <p class="hambargar menu">
          <button
            @click="sidebar = !sidebar"
            aria-label="Open Menu"
            class="overflow-x-hidden overflow-y-hidden transition ease-in-out focus:outline-none duration-1500"
          >
            <svg
              class="w-6 h-6 my-auto mt-1 text-white me-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </p>
        <nuxt-link :to="localePath('/')" class="my-auto"> </nuxt-link>
      </div>
      <div class="flex items-center me-1"></div>
    </div>
    <div class="w-full px-2 pb-2"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { typingTimeout } from '~/config'
export default {
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {
      search: '',
      isOpen: false,
      sidebar: false,
    }
  },
  computed: {},
  // async created() {
  //   await this.getCart()
  // },
  methods: {
    submit(q) {
      this.$router.push(`/search/${q}`)
    },
  },
  watch: {
    search: {
      immediate: false,
      handler(value, oldValue) {
        // if (value.length < 4) return;
        if (!oldValue) return // Do not trigger on page load
        clearTimeout(this.typingTimer)
        let vm = this
        this.typingTimer = setTimeout(function () {
          if (!value || value == 'undefined') value = '' // When clear button clicked
          vm.searchString = value
          vm.$router.push(`/search/${value}`)
        }, typingTimeout)
      },
    },
    '$route.query.q': {
      immediate: true,
      handler(value) {
        let pathName = null
        if (this.$route.name) pathName = this.$route.name.substr(0, 8)
        if (pathName === 'category') return
        if (!value || value == 'undefined') value = ''
        if (value == '') return
        if (this.search == '') this.search = value
      },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Searchwidth {
  width: 100%;
}
.h-7 {
  height: 1.9rem;
}
.margin {
  margin-top: 9px;
}
.w-full2 {
  margin-right: 30px;
  /* width: 100%; */
}
.ml {
  margin-left: 11px;
}
.closeSideBar {
  left: -100%;
  transition: 0.3s all;
}
.openSideBar {
  left: 0;
  transition: 0.3s all;
}
</style>
