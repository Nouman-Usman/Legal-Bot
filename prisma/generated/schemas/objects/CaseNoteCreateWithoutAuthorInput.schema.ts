import { z } from 'zod'
import { CaseCreateNestedOneWithoutCaseNotesInputObjectSchema } from './CaseCreateNestedOneWithoutCaseNotesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteCreateWithoutAuthorInput> = z
  .object({
    id: z.string().optional(),
    noteContent: z.string().optional().nullable(),
    createdDate: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    case: z
      .lazy(() => CaseCreateNestedOneWithoutCaseNotesInputObjectSchema)
      .optional(),
  })
  .strict()

export const CaseNoteCreateWithoutAuthorInputObjectSchema = Schema
