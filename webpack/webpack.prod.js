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
        NODE_ENV: JSON.stringify('production'),
        FACEBOOK_URL: JSON.stringify(process.env.FACEBOOK_URL),
        GOOGLE_URL: JSON.stringify(process.env.GOOGLE_URL),
        LINKEDIN_URL: JSON.stringify(process.env.LINKEDIN_URL),
        TWITTER_URL: JSON.stringify(process.env.TWITTER_URL),
        API_BASE_URL: JSON.stringify(process.env.API_BASE_URL)
      }
    })
  ]
});
