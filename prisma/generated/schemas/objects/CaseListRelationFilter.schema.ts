import { z } from 'zod'
import { CaseWhereInputObjectSchema } from './CaseWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseListRelationFilter> = z
  .object({
    every: z.lazy(() => CaseWhereInputObjectSchema).optional(),
    some: z.lazy(() => CaseWhereInputObjectSchema).optional(),
    none: z.lazy(() => CaseWhereInputObjectSchema).optional(),
  })
  .strict()

export const CaseListRelationFilterObjectSchema = Schema
