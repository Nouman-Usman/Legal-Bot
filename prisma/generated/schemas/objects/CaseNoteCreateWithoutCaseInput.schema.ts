import { z } from 'zod'
import { UserCreateNestedOneWithoutCaseNotesAsAuthorInputObjectSchema } from './UserCreateNestedOneWithoutCaseNotesAsAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteCreateWithoutCaseInput> = z
  .object({
    id: z.string().optional(),
    noteContent: z.string().optional().nullable(),
    createdDate: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    author: z
      .lazy(() => UserCreateNestedOneWithoutCaseNotesAsAuthorInputObjectSchema)
      .optional(),
  })
  .strict()

export const CaseNoteCreateWithoutCaseInputObjectSchema = Schema
