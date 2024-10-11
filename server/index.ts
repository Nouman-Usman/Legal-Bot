import { createRequestHandler } from '@remix-run/express'
import { type ServerBuild } from '@remix-run/node'
import compression from 'compression'
import express from 'express'
import { createServer } from 'http'
import morgan from 'morgan'

const app = express()

const httpServer = createServer(app)

const viteDevServer =
  process.env.NODE_ENV === 'production'
    ? undefined
    : await import('vite').then(vite =>
        vite.createServer({
          server: {
            host: true,
            middlewareMode: true,
            warmup: {
              clientFiles: ['./app/routes/*.tsx'],
              ssrFiles: ['./app/routes/api.*.tsx'],
            },
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
        }),
      )

app.use(compression())

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by')

// handle asset requests
if (viteDevServer) {
  app.use(viteDevServer.middlewares)
} else {
  // Vite fingerprints its assets so we can cache forever.
  app.use(
    '/assets',
    express.static('build/client/assets', { immutable: true, maxAge: '1y' }),
  )
}

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static('build/client', { maxAge: '1h' }))

app.use(morgan('tiny'))

async function getBuild() {
  try {
    const build = viteDevServer
      ? await viteDevServer.ssrLoadModule('virtual:remix/server-build')
      : // @ts-ignore Build will appear after
        // eslint-disable-next-line import/no-unresolved
        await import('../build/server/remix.js')

    return { build: build as unknown as ServerBuild, error: null }
  } catch (error) {
    // Catch error and return null to make express happy and avoid an unrecoverable crash
    console.error('Error creating build:', error)
    return { error: error, build: null as unknown as ServerBuild }
  }
}
// handle SSR requests
app.all(
  '*',
  createRequestHandler({
    build: async () => {
      const { error, build } = await getBuild()

      if (error) {
        throw error
      }

      return build
    },
  }),
)

const port = process.env.PORT || 8099

httpServer.listen(port, () =>
  console.log(`Express server listening at http://localhost:${port}`),
)
