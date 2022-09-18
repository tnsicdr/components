import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import typescript from '@rollup/plugin-typescript';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      name: '@tnsicdr/components',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    }
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript(),
    esbuild({
      jsx: 'automatic'
    }),
  ],
};
