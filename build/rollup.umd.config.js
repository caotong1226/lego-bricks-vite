import basicConfig, { file } from './rollup.config'
export default {
  ...basicConfig,
  output: {
    name: 'lego-components',
    file: file('umd'),
    format: 'umd',
    globals: {
      vue: 'Vue',
      'lodash-es': '_'
    },
    exports: 'named'
  }
}
