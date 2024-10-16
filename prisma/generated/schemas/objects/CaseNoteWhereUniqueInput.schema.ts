import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const CaseNoteWhereUniqueInputObjectSchema = Schema
