import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { LawyerProfileRelationFilterObjectSchema } from './LawyerProfileRelationFilter.schema'
import { LawyerProfileWhereInputObjectSchema } from './LawyerProfileWhereInput.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import { InvoiceListRelationFilterObjectSchema } from './InvoiceListRelationFilter.schema'
import { CaseNoteListRelationFilterObjectSchema } from './CaseNoteListRelationFilter.schema'
import { MessageListRelationFilterObjectSchema } from './MessageListRelationFilter.schema'
import { DocumentListRelationFilterObjectSchema } from './DocumentListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CaseWhereInputObjectSchema),
        z.lazy(() => CaseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CaseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CaseWhereInputObjectSchema),
        z.lazy(() => CaseWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    caseNumber: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    title: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    status: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    startDate: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    endDate: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    lawyerProfileId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    clientId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    lawyerProfile: z
      .union([
        z.lazy(() => LawyerProfileRelationFilterObjectSchema),
        z.lazy(() => LawyerProfileWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    client: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    invoices: z.lazy(() => InvoiceListRelationFilterObjectSchema).optional(),
    caseNotes: z.lazy(() => CaseNoteListRelationFilterObjectSchema).optional(),
    messages: z.lazy(() => MessageListRelationFilterObjectSchema).optional(),
    documents: z.lazy(() => DocumentListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const CaseWhereInputObjectSchema = Schema
