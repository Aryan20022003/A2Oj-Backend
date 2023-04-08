module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty'
      };
    }

    // Add the fallback configuration here
    config.resolve.fallback = {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      vm: require.resolve("vm-browserify"),
      process: require.resolve("process/browser"),
    };

    return config;
  },
};
