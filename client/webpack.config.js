// webpack.config.js
const NodeProtocolPlugin = require('webpack-node-protocol-plugin');
const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      // Add polyfills for Node.js core modules
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      fs: false, // Ignore 'fs' as it's not available in browsers
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      url: require.resolve('url'),
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
    },
  },
  plugins: [
    new NodeProtocolPlugin(), // Handle `node:` protocol
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};