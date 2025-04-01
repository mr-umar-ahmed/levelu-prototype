// config-overrides.js
const NodeProtocolPlugin = require('webpack-node-protocol-plugin');

module.exports = function override(config, env) {
  // Add polyfills for Node.js core modules
  config.resolve.fallback = {
    ...config.resolve.fallback,
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
  };

  // Add the NodeProtocolPlugin to handle `node:` protocol
  config.plugins = [
    ...(config.plugins || []),
    new NodeProtocolPlugin(),
  ];

  return config;
};