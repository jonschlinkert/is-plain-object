export default {
  input: './index.js',
  output: [
    {
      format: 'iife',
      file: 'browser/is-plain-object.js',
      name: 'isPlainObject',
      exports: 'default'
    },
    {
      format: 'cjs',
      file: 'index.cjs.js',
      exports: 'default'
    },
    {
      format: 'es',
      file: 'index.es.js'
    }
  ]
}
