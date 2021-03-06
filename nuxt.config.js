const tsLoader = require('./config/ts-loader')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Add axios globally
   */
  build: {
    vendor: ['axios'],
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      console.log(JSON.stringify(ctx))
      if (ctx.isClient && ctx.dev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        tsLoader(config)
      }
    }
  },
  plugins: [
  ],
  modules: [
    'nuxt-typescript'
  ],
  cache: true,
  srcDir: 'client/',
  router: {
    middleware: 'auth'
  }
}
