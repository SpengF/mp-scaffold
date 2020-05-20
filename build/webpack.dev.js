const merge=require('webpack-merge')
const webpack=require('webpack')
const common=require('./webpack.common')
const path=require('path')
const dev={
  mode:'development',
  devtool:'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open:true,
    port: 8888,
    hot:true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'vue-style-loader',
          {
            loader:'css-loader',
            options:{
                importLoaders:2
            }
          },
          'postcss-loader'
        ]
      },
      {
        test:/\.less$/,
        use:[
          'vue-style-loader',
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
module.exports=merge(common,dev)