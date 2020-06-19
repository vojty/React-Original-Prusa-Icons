import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
    input: './src/lib/index.ts',
    output: [
        {
            format: 'cjs',
            dir: 'dist/',
            sourcemap: true
        },
        {
            format: 'esm',
            dir: 'dist/',
            sourcemap: true
        }
    ],
    plugins: [
        typescript(),
        external(),
        postcss(),
        babel({
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        resolve(),
        commonjs(),
        image()
    ]
}