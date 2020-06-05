const merge=require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common=require('./webpack.common')
const pro={
  mode:'production',
  devtool:'cheap-module-source-map',
  plugins:[
    new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    chunkFilename: 'css/[id].css',
    }),
    new TerserJSPlugin({
      extractComments:false
    }),
    new OptimizeCSSAssetsPlugin()
  ],
  optimization: {
    splitChunks:{
      chunks:'all',
      automaticNameDelimiter: '-',
      cacheGroups:{
        chunk:{
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default:false
      }
    }
  },
  output:{
    filename:'js/[name].[contenthash].js',
    chunkFilename:'js/[name].[contenthash].js',
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        sideEffects: true,
        use:[{
          loader:MiniCssExtractPlugin.loader,
          options:{
            publicPath: '../'
          }
        },'css-loader','postcss-loader']
      },
      {
        test:/\.less$/,
        sideEffects: true,
        use:[
          MiniCssExtractPlugin.loader,
          {
              loader:'css-loader',
              options:{
                  importLoaders:2
              }
          },
          'less-loader',
          'postcss-loader'
        ]
      },
    ]
  }
}
module.exports=merge(common,pro)