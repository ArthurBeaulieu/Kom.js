module.exports = env => {
  // Webpack clean and uglify plugins
  const path = require('path');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  const TerserPlugin = require('terser-webpack-plugin');
  // Utils path
  const SRC = path.resolve(__dirname, '');
  const DIST = path.resolve(__dirname, 'dist');
  // Webpack configuration object
  return {
    mode: 'development',
    watch: env.dev === 'true',
    entry: ['src/Kom.js'],
    stats: {
      warnings: env.dev === 'true',
    },
    devtool: false,
    output: {
      path: DIST,
      filename: `Kom.min.js`
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }]
    },
    optimization: {
      minimize: env.dev === 'false',
      minimizer: [ new TerserPlugin({
        extractComments: false,
        terserOptions: {
         output: {
           comments: false,
         },
       }
     }) ],
    },
    plugins: [
      new CleanWebpackPlugin({
        root: DIST,
        verbose: true,
        dry: false
      })
    ],
    resolve: {
      extensions: ['.js'],
      modules: ['node_modules', SRC]
    }
  };
};
