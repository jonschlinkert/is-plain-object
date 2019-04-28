import nodeResolve from 'rollup-plugin-node-resolve';

export default [
  {
    input: './index.js',
    output: {
      format: 'iife',
      file: 'browser/is-plain-object.js',
      name: 'isPlainObject'
    },
    plugins: [
      nodeResolve(),
    ]
  },

  {
    input: './index.js',
    output: {
      format: 'cjs',
      file: 'index.cjs.js'
    },
    plugins: [
      nodeResolve()
    ]
  }
]
