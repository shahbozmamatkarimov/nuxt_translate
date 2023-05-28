<template>
  <main>
    <section>
      <div class="flex items-center rounded-full my-1 gap-5 ml-[17%] absolute">
        <button
          class="flex items-center bg-[#01756C] p-5 px-10 rounded-full text-white gap-4"
        >
          ENG<img src="../../assets/svg/symbol.svg" alt="<=>" />UZB
        </button>
        <label for="search">
          <i class="bx bx-search text-2xl cursor-pointer"></i>
        </label>
      </div>
      <form @submit.prevent="Search">
        <div class="flex justify-center items-center text-2xl my-20">
          <input
            type="search"
            id="search"
            v-model="search"
            class="pl-64 focus:outline-none focus:shadow-2xl shadow-black bg-white p-5 rounded-full w-2/3 mx-auto border"
            placeholder="Search words here......"
          />
          <input type="submit" class="hidden" />
        </div>
      </form>
      <div v-if="!word" class="w-2/3 mx-auto text-2xl my-32">
        <h2 class="text-center">
          Search any words, and we found this word defination, <br />
          translation and etc.
        </h2>
      </div>
      <div v-if="word" class="mx-auto w-2/3 bg-white rounded-xl p-5 leading-10">
        <h1 class="font-bold">{{ word.data[0]?.word }}</h1>
        <p>exclamation, {{ word.data[0]?.meanings[0]?.partOfSpeech }}</p>
        <div class="flex gap-5">
          <img src="../../assets/svg/voice.svg" @click="playSound" alt="voice" class="cursor-pointer" />
          <i>{{ word.data[0]?.phonetics[1]?.text }}</i>
        </div>
        <div class="leading-10">
          <p>{{ word?.data[0]?.meanings[0]?.synonyms[0] }}</p>
          <p>{{ word?.data[0]?.meanings[2]?.definitions[0]?.example }}</p>
        </div>
      </div>
    </section>
  </main>
</template>
  
<script setup>
const search = ref("");
const word = ref("");
const Search = async () => {
  word.value = await useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${search.value}`
  );
  search.value = "";
  console.log(word.value);
};
const playSound = () => {
  if (word.value.data[0]?.phonetics[0]?.audio) {
    const audio = new Audio(word.value.data[0]?.phonetics[0]?.audio);
    audio.play();
  }
};
</script>
  
<style lang="scss" scoped>
</style>