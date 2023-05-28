<template>
  <header class="bg-[#01756C]">
    <div class="container mx-auto px-10">
      <nav class="flex justify-between h-[70px] items-center">
        <nuxt-link to="/" class="flex">
          <img src="../assets/svg/hand.svg" alt="logo" />
          <img src="../assets/svg/logo.svg" alt="logo" />
        </nuxt-link>
        <ul class="flex gap-8 text-[#FFFFFF] text-[18px]">
          <li>
            <nuxt-link to="/eng_uzb" class="flex gap-2">
              ENG<img src="../assets/svg/symbol.svg" alt="<=>" />UZB
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/rus_uzb" class="flex gap-2">
              RUS<img src="../assets/svg/symbol.svg" alt="<=>" />UZB
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/articles">Articles</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/grammar">Grammar</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about_us">About us</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
  
  <script setup>
</script>
  
  <style lang="scss" scoped>
.router-link-exact-active {
  font-weight: 800px;
  text-decoration: underline;
}
.logo {
  text-decoration: none;
}
</style>