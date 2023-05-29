<template>
  <div>
    <div id="accordion-collapse" data-accordion="collapse">
      <h2>
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <span>What is Flowbite?</span>
          <span
            @click="toggle.t1 = !toggle.t1"
            class="flex items-center text-3xl font-extrabold text-[#01756C] px-3 py-1 pb-2 bg-white rounded-full"
            >+</span
          >
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        :class="{ hidden: toggle.t1 }"
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div
          class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
        >
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to
            <a
              href="/docs/getting-started/introduction/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >get started</a
            >
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-2"
        >
          <span>Is there a Figma file available?</span>
          <span
            @click="toggle.t2 = !toggle.t2"
            class="flex items-center text-3xl font-extrabold text-[#01756C] px-3 py-1 pb-2 bg-white rounded-full"
            >+</span
          >
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        :class="{ hidden: toggle.t2 }"
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the
            <a
              href="https://flowbite.com/figma/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >Figma design system</a
            >
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-3"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-3"
        >
          <span
            >What are the differences between Flowbite and Tailwind UI?</span
          >
          <span
            @click="toggle.t3 = !toggle.t3"
            class="flex items-center text-3xl font-extrabold text-[#01756C] px-3 py-1 pb-2 bg-white rounded-full"
            >+</span
          >
        </button>
      </h2>
      <div
        :class="{ hidden: toggle.t3 }"
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const toggle = reactive({
  t1: true,
  t2: true,
  t3: true,
});
</script>

<style lang="scss" scoped></style>