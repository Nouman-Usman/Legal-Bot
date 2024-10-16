import { z } from 'zod'
import { CaseNoteCreateManyAuthorInputObjectSchema } from './CaseNoteCreateManyAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteCreateManyAuthorInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CaseNoteCreateManyAuthorInputObjectSchema),
      z.lazy(() => CaseNoteCreateManyAuthorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const CaseNoteCreateManyAuthorInputEnvelopeObjectSchema = Schema
