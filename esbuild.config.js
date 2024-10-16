const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { sassPlugin } = require('@esbuild-plugins/node-sass');

require('esbuild').build({
  entryPoints: ['app/root.tsx'],
  bundle: true,
  outfile: 'build/index.js',
  plugins: [sassPlugin(), nodeExternalsPlugin()],
}).catch(() => process.exit(1));