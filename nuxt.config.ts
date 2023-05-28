// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss"],
  
    devtools: {
      enabled: true,
    },
  
    app: {
      head: {
        title: "Translator",
        link: [
          {
            rel: "stylesheet",
            href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
          },
          {
            rel: "icon",
            href: "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?w=2000",
          },
        ],
        meta: [
          { name: "describtion", content: "Translator" },
          { name: "author", content: "Nuxt 3 app" },
        ],
      },
    },
  });
  