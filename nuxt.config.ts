// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
  app:{
    head:{
        link:[
            {rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap'}
        ],
        script:[
            'https://code.iconify.design/3/3.1.0/iconify.min.js'
        ]
    }
  },

  ssr:false,

});
