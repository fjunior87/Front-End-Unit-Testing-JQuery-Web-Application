// Karma configuration
// Generated on Thu Mar 23 2017 15:48:11 GMT+0100 (W. Central Africa Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','browserify'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/underscore/underscore.js',
      'src/*.1.js',
      'spec/*Spec2.js',
      'node_modules/jquery/dist/jquery.js',
      'node_modules/jasmine-jquery/lib/jasmine-jquery.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec/*Spec2.js': [ 'browserify' ]
    },

    // add additional browserify configuration properties here
    // such as transform and/or debug=true to generate source maps
    browserify: {
      debug: true,
      transform: ['brfs'],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.external('CGPASpec');
        });
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome', 'Firefox', 'PhantomJS'],
    //browsers: ['Chrome', 'ChromeHeadless', 'ChromeHeadlessNoSandbox'],
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox',
                '--disable-web-security',
                '--disable-gpu',
                '--headless=new'
               ]
      }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    //singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
