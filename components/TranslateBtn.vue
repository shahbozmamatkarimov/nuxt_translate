<template>
  <div>
    <div
      class="flex items-center rounded-full my-1 gap-5 ml-[17%] absolute"
    >
      <button
        class="flex items-center bg-[#01756C] p-5 px-10 rounded-full text-white gap-4"
      >
      <slot></slot>
      </button>
      <label for="search">
        <i class="bx bx-search text-2xl cursor-pointer"></i>
      </label>
    </div>
    <div class="flex justify-center items-center text-2xl my-20">
      <input
        type="search"
        id="search"
        class="pl-64 focus:outline-none focus:shadow-2xl shadow-black bg-white p-5 rounded-full w-2/3 mx-auto border"
        placeholder="Search words here......"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
</style>