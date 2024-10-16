import { z } from 'zod'
import { CaseCreateManyClientInputObjectSchema } from './CaseCreateManyClientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateManyClientInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CaseCreateManyClientInputObjectSchema),
      z.lazy(() => CaseCreateManyClientInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const CaseCreateManyClientInputEnvelopeObjectSchema = Schema
