import gulp from 'gulp'
import { clean, scripts, styles, fonts, locales, markup, images, manifest, watch, bundle } from './tasks'
import dotenv from 'dotenv'
dotenv.config()


export const paths = {
  scripts: [
    'src/scripts/**/*',
    'src/components/**/*.tsx'
  ],

  styles: [
    'src/styles/popup.scss',
    'src/components/**/*.scss'
  ],

  locales: 'src/_locales/**/*.json',

  fonts: 'app/fonts/**/*.{woff,woff2,ttf,eot,svg}',

  images: 'src/images/**/*',

  manifest: 'src/manifest.json',

  markup: 'src/pages/*',
}


gulp.task('build', gulp.series(
  clean,
  gulp.parallel(
    scripts,
    styles,
    fonts,
    locales,
    markup,
    images,
    manifest
  )))
gulp.task('dev', gulp.series('build', watch))
gulp.task('bundle', gulp.series('build', bundle))
