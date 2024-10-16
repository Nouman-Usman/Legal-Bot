import { z } from 'zod'
import { InvoiceCreateManyCaseInputObjectSchema } from './InvoiceCreateManyCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.InvoiceCreateManyCaseInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => InvoiceCreateManyCaseInputObjectSchema),
      z.lazy(() => InvoiceCreateManyCaseInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const InvoiceCreateManyCaseInputEnvelopeObjectSchema = Schema
