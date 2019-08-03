const path = require('path')
const webpack = require('webpack')
const version = process.env.VERSION || require('./aventum-sample-client-extension/package.json').version

const banner =
  'Aventum Sample Client Extension v' + version + '\n' +
  '(c) ' + new Date().getFullYear() + ' Mohammed Al-Mahdawi\n' +
  'Released under the MIT License.'

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'aventum-sample-client-extension'),
    filename: 'index.js',
    library: 'AventumSampleClientExtension',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'semantic-ui-react' : {
      commonjs2:'semantic-ui-react',
      commonjs:'semantic-ui-react',
      amd: 'semantic-ui-react',
      root: ['aventum', 'ui']
    },
    'react-router-dom': {
      commonjs: 'react-router-dom',
      commonjs2: 'react-router-dom',
      amd: 'react-router-dom',
      root: ['aventum', 'router']
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      }
    ]
  },
  plugins: [
      new webpack.BannerPlugin({
          banner
      })
  ]
}
