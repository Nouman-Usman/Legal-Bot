import { z } from 'zod'
import { LawyerProfileCreateManyUserInputObjectSchema } from './LawyerProfileCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => LawyerProfileCreateManyUserInputObjectSchema),
      z.lazy(() => LawyerProfileCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const LawyerProfileCreateManyUserInputEnvelopeObjectSchema = Schema
