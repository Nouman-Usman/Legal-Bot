import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    noteContent: z.string().optional().nullable(),
    createdDate: z.string().optional().nullable(),
    caseId: z.string(),
    authorId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const CaseNoteUncheckedCreateInputObjectSchema = Schema
