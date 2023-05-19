import { esbuildPlugin } from '@web/dev-server-esbuild';

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
    esbuildPlugin({ ts: true })
  ]
};
