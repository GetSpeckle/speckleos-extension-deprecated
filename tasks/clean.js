import del from 'del'


export function clean() {
  return del(['build'])
}
