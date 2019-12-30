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
        Assets: path.resolve(__dirname, 'src/assets'),
        Components: path.resolve(__dirname, 'src/components'),
        Firebase: path.resolve(__dirname, 'src/firebase'),
        Layouts: path.resolve(__dirname, 'src/layouts'),
        Pages: path.resolve(__dirname, 'src/pages'),
      },
    },
  })
}
