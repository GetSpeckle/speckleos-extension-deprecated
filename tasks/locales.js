import gulp from 'gulp'
import { paths } from '../gulpfile'

export function locales() {
  return gulp.src(paths.locales, { since: gulp.lastRun(locales) })
    .pipe(gulp.dest(`build/_locales`))
}
