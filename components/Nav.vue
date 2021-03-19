<template>
  <div class="flex flex-col">
    <header class="sticky top-0 z-10 w-full h-auto p-3 shadow bg-primary-500">
      <div class="flex flex-row mx-auto bg-primary-500 xl:container">
        <div class="my-auto text-white">
          <nuxt-link :to="localePath('/')"> </nuxt-link>
        </div>
        <!--right header block -->
        <div class="flex flex-row text-xs">
          <nuxt-link to="/live-stream" class="my-auto mr-4 text-white">
            Live Vendors
          </nuxt-link>
          <nuxt-link to="/live-stream/one2one" class="my-auto mr-4 text-white">
            Request Product Demo
          </nuxt-link>
          <nuxt-link to="/live-stream/saved" class="my-auto mr-4 text-white">
            Missed Videos
          </nuxt-link>
          <div
            class="sticky z-20 flex flex-row items-center my-auto mr-3 text-sm text-white bg-primary-500 flex-nowrap"
          >
            <div @click="isOpen = !isOpen"></div>
          </div>
          <nuxt-link :to="localePath('cart')" class="my-auto text-white">
            <div class="relative flex flex-col">
              <!-- cart icon -->
              <svg
                class="relative w-6 h-6 mt-2 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
              </svg>
            </div>
          </nuxt-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {
      isOpen: false,
      isOpenMore: false,
    }
  },
  computed: {},

  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-xs {
  font-size: 0.675rem;
  line-height: 1.1rem;
  margin-left: 1px;
}
.-mb-1 {
  margin-bottom: 4px;
}
.margin {
  margin-left: 11.5rem;
  /* margin-right: 11.5rem; */
}

.custom-class {
  margin-top: 6px;
}
.height {
  height: 2.4rem;
}
.login {
  padding: 2px;
  width: 7.5rem;
  height: 2.1rem;
  text-align: center;
  /* margin-right: 8rem; */
  /* margin-left: -32px; */
}
</style>
