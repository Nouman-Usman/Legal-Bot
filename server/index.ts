import { createRequestHandler } from '@remix-run/express';
import { type ServerBuild } from '@remix-run/node';
import compression from 'compression';
import express from 'express';
import { createServer } from 'http';
import morgan from 'morgan';

// Create the Express app
const app = express();
const httpServer = createServer(app);

const viteDevServer = process.env.NODE_ENV === 'production' ? undefined : await import('vite').then(vite =>
  vite.createServer({
    server: {
      host: true,
      middlewareMode: true,
      hmr: {
        server: httpServer,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  })
);

// Use compression and disable 'x-powered-by' for security
app.use(compression());
app.disable('x-powered-by');

// Vite dev middleware in development
if (viteDevServer) {
  app.use(viteDevServer.middlewares);
} else {
  // Serve static assets in production
  app.use('/assets', express.static('build/client/assets', { immutable: true, maxAge: '1y' }));
  app.use(express.static('build/client', { maxAge: '1h' }));
}

// Logger
app.use(morgan('tiny'));

// Function to load the server build
async function getBuild() {
  try {
    const build = viteDevServer
      ? await viteDevServer.ssrLoadModule('virtual:remix/server-build')
      : // @ts-ignore: Ignore this import until build is generated
       await import('../build/server/remix.js');

    return { build: build as ServerBuild, error: null };
  } catch (error) {
    console.error('Error creating build:', error);
    return { error, build: null as unknown as ServerBuild };
  }
}

// Handle all SSR requests
app.all(
  '*',
  createRequestHandler({
    build: async () => {
      const { error, build } = await getBuild();
      if (error) throw error;
      return build;
    },
  })
);

// Start the server
const port = process.env.PORT || 8099;
httpServer.listen(port, () =>
  console.log(`Express server listening at http://localhost:${port}`)
);
