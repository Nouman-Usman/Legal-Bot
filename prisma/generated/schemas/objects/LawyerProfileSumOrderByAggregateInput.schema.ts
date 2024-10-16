import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileSumOrderByAggregateInput> = z
  .object({
    yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const LawyerProfileSumOrderByAggregateInputObjectSchema = Schema
