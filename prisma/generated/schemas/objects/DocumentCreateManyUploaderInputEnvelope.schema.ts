import { z } from 'zod'
import { DocumentCreateManyUploaderInputObjectSchema } from './DocumentCreateManyUploaderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentCreateManyUploaderInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => DocumentCreateManyUploaderInputObjectSchema),
      z.lazy(() => DocumentCreateManyUploaderInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const DocumentCreateManyUploaderInputEnvelopeObjectSchema = Schema
