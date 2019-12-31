const path = require('path')

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-import',
    options: {
      libraryName: 'antd',
      style: true,
    },
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // BASE
        SRC: path.resolve(__dirname, 'src'),
        Static: path.resolve(__dirname, 'static'),

        // SRC
        Firebase: path.resolve(__dirname, 'src/firebase'),
        Layouts: path.resolve(__dirname, 'src/layouts'),
        Pages: path.resolve(__dirname, 'src/pages'),

        // ASSETS
        CSS: path.resolve(__dirname, 'src/assets/css'),
        Fonts: path.resolve(__dirname, 'src/assets/fonts'),
        Images: path.resolve(__dirname, 'src/assets/img'),

        // UI
        Components: path.resolve(__dirname, 'src/ui/components'),
        Elements: path.resolve(__dirname, 'src/ui/elements'),
        Error: path.resolve(__dirname, 'src/ui/modules/Error'),
        Modules: path.resolve(__dirname, 'src/ui/modules'),

        // UTILS
        Context: path.resolve(__dirname, 'src/utils/context'),
        Hooks: path.resolve(__dirname, 'src/utils/hooks'),
      },
    },
  })
}
