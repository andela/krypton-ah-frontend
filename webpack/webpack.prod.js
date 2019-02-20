const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const dotenv = require('dotenv');
const webpack = require('webpack');

dotenv.config();
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        FACEBOOK_URL: JSON.stringify(process.env.FACEBOOK_URL),
        GOOGLE_URL: JSON.stringify(process.env.GOOGLE_URL),
        LINKEDIN_URL: JSON.stringify(process.env.LINKEDIN_URL),
        TWITTER_URL: JSON.stringify(process.env.TWITTER_URL),
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
});
