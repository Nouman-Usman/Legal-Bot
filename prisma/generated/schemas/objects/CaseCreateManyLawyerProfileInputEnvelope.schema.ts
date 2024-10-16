import { z } from 'zod'
import { CaseCreateManyLawyerProfileInputObjectSchema } from './CaseCreateManyLawyerProfileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateManyLawyerProfileInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CaseCreateManyLawyerProfileInputObjectSchema),
      z.lazy(() => CaseCreateManyLawyerProfileInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const CaseCreateManyLawyerProfileInputEnvelopeObjectSchema = Schema
