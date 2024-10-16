import { z } from 'zod'
import { DocumentWhereInputObjectSchema } from './DocumentWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentListRelationFilter> = z
  .object({
    every: z.lazy(() => DocumentWhereInputObjectSchema).optional(),
    some: z.lazy(() => DocumentWhereInputObjectSchema).optional(),
    none: z.lazy(() => DocumentWhereInputObjectSchema).optional(),
  })
  .strict()

export const DocumentListRelationFilterObjectSchema = Schema
