module.exports = (config) => {
  config.set({
    frameworks: ["mocha", "karma-typescript"],
    preprocessors: {
      "**/*.ts": ["karma-typescript"],
    },
    reporters: ["progress", "karma-typescript"],
    files: [
      'app/*.ts',
      'test/*.ts'
    ],
    browsers: ['PhantomJS'],
    logLevel: config.LOG_DEBUG
  })
}
