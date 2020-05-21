import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'

export default [
  // Client side
  {
    input: 'src/MyComponent.vue',
    output: {
      format: 'esm',
      file: 'dist/index.esm.js'
    },
    plugins: [
      css(),
      vue({
        css: false,
      })
    ]
  },
  // SSR build.
  {
    input: 'src/MyComponent.vue',
    output: {
      format: 'cjs',
      file: 'dist/index.cjs.js'
    },
    plugins: [
      css(),
      vue({
        css: false,
        template: {
          optimizeSSR: true,
        }
      })
    ]
  }
]
