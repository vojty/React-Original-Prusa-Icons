import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import image from '@rollup/plugin-image'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

const bundle = config => ({
    ...config,
    input: 'src/lib/index.ts'
})

export default [
    bundle({
        plugins: [
            typescript({
                tsconfigOverride: {
                    target: 'esnext'
                }
            }),
            external(),
            postcss(),
            babel({
                babelHelpers: 'runtime'
            }),
            resolve(),
            commonjs(),
            image()
        ],
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: pkg.module,
                format: 'es',
                sourcemap: true
            },
        ]
    }),
    bundle({
        plugins: [dts()],
        output: {
            file: pkg.types,
            format: 'es'
        },
    })
]
