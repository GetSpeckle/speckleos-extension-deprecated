import gulp from 'gulp'
import { paths } from '../gulpfile'

export function fonts() {
  return gulp.src(paths.fonts, { since: gulp.lastRun(fonts) })
    .pipe(gulp.dest(`build/fonts`))
}
