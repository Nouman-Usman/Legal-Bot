import { z } from 'zod'
import { CaseWhereInputObjectSchema } from './CaseWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseRelationFilter> = z
  .object({
    is: z
      .lazy(() => CaseWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => CaseWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const CaseRelationFilterObjectSchema = Schema
