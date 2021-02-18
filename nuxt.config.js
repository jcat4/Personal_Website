
export default {
  mode: 'universal',
  server: {
    port: 8000,
    host: '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "Joey Cardosi's Site",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Joey's Personal Website!" } // TODO
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Montserrat:wght@800&display=swap', async: true }
    ],
    htmlAttrs: {
      lang: "en"
    },
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.js',
    {
      src: '~/plugins/GoogleAnalytics.js',
      mode: 'client',
    }
  ],
  /*
  ** Nuxt.js dev-modules

  */
  buildModules: [
    '@aceforth/nuxt-optimized-images'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-rfg-icon', { masterPicture: 'static/favicon.svg' }],
  ],
  optimizedImages: {
    optimizeImages: true
  },
  rfg: {
    design: {
			ios: {
				pictureAspect: 'backgroundAndMargin',
				backgroundColor: '#ffffff',
				margin: '14%',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#ffc40d',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: '#ffffff',
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'silhouette',
				themeColor: '#5bbad5'
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false,
			readmeFile: false,
			htmlCodeFile: false,
			usePathAsIs: false
		}
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-preset-env': this.preset,
        'cssnano': { preset: 'default' } // disabled in dev mode
      },
      order: 'presetEnvAndCssnanoLast',
      preset: {
        stage: 2
      }
    },
    extend (config, ctx) {
    }
  }
}
