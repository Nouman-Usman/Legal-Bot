import { z } from 'zod'
import { CaseNoteCreateManyCaseInputObjectSchema } from './CaseNoteCreateManyCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteCreateManyCaseInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CaseNoteCreateManyCaseInputObjectSchema),
      z.lazy(() => CaseNoteCreateManyCaseInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const CaseNoteCreateManyCaseInputEnvelopeObjectSchema = Schema
