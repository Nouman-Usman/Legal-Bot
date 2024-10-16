import { z } from 'zod'
import { LawyerProfileWhereInputObjectSchema } from './LawyerProfileWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileListRelationFilter> = z
  .object({
    every: z.lazy(() => LawyerProfileWhereInputObjectSchema).optional(),
    some: z.lazy(() => LawyerProfileWhereInputObjectSchema).optional(),
    none: z.lazy(() => LawyerProfileWhereInputObjectSchema).optional(),
  })
  .strict()

export const LawyerProfileListRelationFilterObjectSchema = Schema
