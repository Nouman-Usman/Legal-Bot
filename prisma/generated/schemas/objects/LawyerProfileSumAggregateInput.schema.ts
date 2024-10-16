import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileSumAggregateInputType> = z
  .object({
    yearsOfExperience: z.literal(true).optional(),
  })
  .strict()

export const LawyerProfileSumAggregateInputObjectSchema = Schema
