import { z } from 'zod'
import { LawyerProfileWhereInputObjectSchema } from './LawyerProfileWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileRelationFilter> = z
  .object({
    is: z
      .lazy(() => LawyerProfileWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => LawyerProfileWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const LawyerProfileRelationFilterObjectSchema = Schema
