const files=[
  'packages/hashi/tailwind/index.js',
  'packages/hashi/config/purgecss.js'
]

export default [
  ...files.map(input=>({
    input,
    output: [
      {
        file: input.replace('.js', '.mjs'),
        format: 'es',
      },
      {
        file: input.replace('.js', '.cjs'),
        format: 'cjs',
      },
    ],
  }))
]
