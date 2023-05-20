import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';

import rollupCommonjs from '@rollup/plugin-commonjs';
import rollupJson from '@rollup/plugin-json';

const commonjs = fromRollup(rollupCommonjs);
const json = fromRollup(rollupJson);

export default {
  files: [
    '**/*.test.ts'
  ],
  coverageConfig: {
    // NOTE: https://github.com/modernweb-dev/web/issues/1400
    // `exclude: ['**/node_modules/**']` is not worked
    exclude: ['./**/node_modules/**'],
  },
  plugins: [
    esbuildPlugin({ ts: true }),
    commonjs({
      include: [
        './**/node_modules/iconv-lite/**/*'
      ]
    }),
    json()
  ]
};
