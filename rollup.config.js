import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: './index.js',
  output: [
    {
      format: 'iife',
      file: 'browser/is-plain-object.js',
      name: 'isPlainObject'
    },
    {
      format: 'cjs',
      file: 'index.cjs.js'
    },
    {
      format: 'es',
      file: 'index.es.js'
    }
  ],
  plugins: [
    nodeResolve(),
  ]
}
