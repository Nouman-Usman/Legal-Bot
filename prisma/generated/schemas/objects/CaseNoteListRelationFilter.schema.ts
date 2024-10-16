import { z } from 'zod'
import { CaseNoteWhereInputObjectSchema } from './CaseNoteWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteListRelationFilter> = z
  .object({
    every: z.lazy(() => CaseNoteWhereInputObjectSchema).optional(),
    some: z.lazy(() => CaseNoteWhereInputObjectSchema).optional(),
    none: z.lazy(() => CaseNoteWhereInputObjectSchema).optional(),
  })
  .strict()

export const CaseNoteListRelationFilterObjectSchema = Schema
