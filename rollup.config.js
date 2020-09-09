export default {
  input: './is-plain-object.js',
  output: [
    {
      format: 'iife',
      file: 'browser/is-plain-object.js',
      name: 'library',
    },
    {
      format: 'cjs',
      file: 'dist/is-plain-object.js',
    },
    {
      format: 'esm',
      file: 'dist/is-plain-object.mjs'
    }
  ]
}
