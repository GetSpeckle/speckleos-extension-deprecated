import gulp from 'gulp'
import { paths } from '../gulpfile'
import webpackStream from 'webpack-stream'
import webpack from 'webpack'
import Dotenv from 'dotenv-webpack'
import addSrc from 'gulp-add-src'
import gulpif from 'gulp-if'
import named from 'vinyl-named'


const webpackConfig = {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  // use automatically in your code process.env.NODE_ENV
  // and all of the other env variables
  plugins: [
    new Dotenv({ systemvars: true }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules/', 'src/scripts/', 'src/components/', 'src/state'],
  },
  // only log errors to console,
  // gulp handles the rest
  stats: 'errors-only',
  // disable webpack's default behavior, which is
  // targeted to web applications development
  performance: false,
  optimization: {
    splitChunks: false,
  },
}

export function scripts() {
  return gulp.src(paths.scripts, { allowEmpty: true })
    .pipe(gulpif(process.env.NODE_ENV === 'development', addSrc('utils/autoreload.js')))
    .pipe(named())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('build/scripts'))
}
