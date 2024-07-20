/**
 * Tidory Configuration
 * @see https://tidory.github.io/docs/configuration/
 */
module.exports = {
  ts_session: '',
  url: '',

  preview: {
    /**
     * homeType
     *
     * NONE
     * COVER
     */
    homeType: 'NONE',

    /**
     * Preview Mode
     *
     * index
     * entry
     * category
     * tag
     * guestbook
     */
    mode: 'index',

    /**
     * Skin Settings
     *
     * @see https://tistory.github.io/document-tistory-skin/common/index.xml.html
     */
    skinSettings: {
      liststyle: 'list',
      recentEntries: 5,
      recentComments: 5,
      lengthOfRecentNotice: 32,
      lengthOfRecentEntry: 32,
      lengthOfRecentComment: 32
    },

    /**
     * Variables
     */
    variableSettings: {
      sidebar: true,
      'foldable-category': true,
      'foldable-reply': true,
      width: '720',
      toc: true,
      scrollspy: true,
      hljs: 'xcode',
      hljsDark: 'vs2015',
      mode: 'simple'
    },

    /**
     * Cover Settings
     */
    coverSettings: [
      {
        description: '슬라이드쇼',
        index: 0,
        name: 'slideshow',
        title: '슬라이드쇼',
        dataType: 'RECENT',
        data: {
          category: 'ALL',
          size: '5'
        }
      },
      {
        description: '리스트',
        index: 0,
        name: 'list',
        title: '리스트',
        dataType: 'RECENT',
        data: {
          category: 'ALL',
          size: '5'
        }
      },
      {
        description: '그리드',
        index: 0,
        name: 'grid',
        title: '그리드',
        dataType: 'RECENT',
        data: {
          category: 'ALL',
          size: '5'
        }
      },
      {
        description: '지그재그',
        index: 0,
        name: 'zigzag',
        title: '지그재그',
        dataType: 'RECENT',
        data: {
          category: 'ALL',
          size: '5'
        }
      }
    ]
  },

  alias: {
    '@': 'assets',
    '~views': 'views'
  },

  /**
   * Webpack Configuration
   *
   * @param {object} webpackConfig
   */
  extends (webpackConfig) {
    webpackConfig.module.rules = [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      ...webpackConfig.module.rules
    ]

    webpackConfig.entry = Object.assign(webpackConfig.entry, {
      app: './assets/js/app.js',
      vendor: './assets/js/vendor.js'
    })
  }
}
