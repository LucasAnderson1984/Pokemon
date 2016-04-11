var gulp = require('gulp'),
  babel = require('gulp-babel'),
  webpack = require('webpack'),
  gulpWebpack = require('webpack-stream'),
  WebpackDevServer = require('webpack-dev-server'),
  nodemon = require('gulp-nodemon'),
  gutil = require('gulp-util'),
  del = require('del')

var buildPath = 'build/';
var publicPath = 'public/';

function removeBuild() {
  return del([buildPath, publicPath]);
}

function renderError(err) {
  gutil.log('[build error]', err.name);
  gutil.log('[build error]', err.message);
  gutil.log('[build error]', err.codeFrame);
}

gulp.task('clean', removeBuild)

// Build the server site
gulp.task('build', function() {
  gutil.log('[babel] Building app...');
  var stream = gulp.src('src/**/*').
    pipe(babel()).
    on('error', function(err) {
      renderError(err);
    }).
    pipe(gulp.dest('build'));

  return stream;
});

// Build the static site
gulp.task('webpack', function () {
  var config = require('./webpack.config.build.js')

  return gulp.src('./src/client/index.js').
    pipe(gulpWebpack(config, webpack)).
    on('error', function(err) {
      renderError(err);
    }).
    pipe(gulp.dest('./public/'))
});

// Copy the assets
gulp.task('assets', function() {
  // Assets
  gulp.src('./assets/**/*').
  pipe(gulp.dest('./public/assets/'));
});

// Fire up the webpack server
gulp.task('webpack-dev', function () {
  var config = require('./webpack.config.js');
  var options = {
    stats: {
      colors: true
    },
    hot: true,
    historyApiFallback: true
  };

  return new WebpackDevServer(webpack(config), options).
    listen(8080, "localhost", function(err) {
      if (err) throw new gutil.PluginError("webpack-dev-server", err);
      gutil.log("[webpack-dev-server]", "http://localhost:8080");
    });
});

// Fire up nodemon
gulp.task('serve', function () {
  var stream = nodemon({
    script: './src/api/server.js',
    execMap: {
      "js": "node ./node_modules/babel-cli/bin/babel-node.js",
      "jsx": "node ./node_modules/babel-cli/bin/babel-node.js"
    },
    ext: 'js jsx'
  });

  return stream;
});

// Fire up the development servers
gulp.task('devServer', ['serve', 'webpack-dev']);

// Build all the things
gulp.task('buildProd', ['build', 'webpack', 'assets']);

/**
 * General Build
 */
gulp.task('default', ['devServer']);
