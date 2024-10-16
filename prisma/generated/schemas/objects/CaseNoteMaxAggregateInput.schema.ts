import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    noteContent: z.literal(true).optional(),
    createdDate: z.literal(true).optional(),
    caseId: z.literal(true).optional(),
    authorId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const CaseNoteMaxAggregateInputObjectSchema = Schema
