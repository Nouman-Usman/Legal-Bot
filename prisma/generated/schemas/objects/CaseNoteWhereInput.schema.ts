import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { CaseRelationFilterObjectSchema } from './CaseRelationFilter.schema'
import { CaseWhereInputObjectSchema } from './CaseWhereInput.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CaseNoteWhereInputObjectSchema),
        z.lazy(() => CaseNoteWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CaseNoteWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CaseNoteWhereInputObjectSchema),
        z.lazy(() => CaseNoteWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    noteContent: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdDate: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    caseId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    authorId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    case: z
      .union([
        z.lazy(() => CaseRelationFilterObjectSchema),
        z.lazy(() => CaseWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    author: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const CaseNoteWhereInputObjectSchema = Schema
