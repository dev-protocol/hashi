import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: 'packages/hashi/tailwind/index.js',
    output: [
      {
        file: 'packages/hashi/tailwind/index.mjs',
        format: 'es',
      },
      {
        file: 'packages/hashi/tailwind/index.cjs',
        format: 'cjs',
      },
    ],
    plugins: [commonjs()],
  },
]
