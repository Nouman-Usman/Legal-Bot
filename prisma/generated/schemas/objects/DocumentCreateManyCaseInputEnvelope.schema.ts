import { z } from 'zod'
import { DocumentCreateManyCaseInputObjectSchema } from './DocumentCreateManyCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentCreateManyCaseInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => DocumentCreateManyCaseInputObjectSchema),
      z.lazy(() => DocumentCreateManyCaseInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const DocumentCreateManyCaseInputEnvelopeObjectSchema = Schema
