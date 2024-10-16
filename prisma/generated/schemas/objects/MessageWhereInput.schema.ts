import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import { CaseRelationFilterObjectSchema } from './CaseRelationFilter.schema'
import { CaseWhereInputObjectSchema } from './CaseWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MessageWhereInputObjectSchema),
        z.lazy(() => MessageWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MessageWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MessageWhereInputObjectSchema),
        z.lazy(() => MessageWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    content: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    timestamp: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    senderId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    receiverId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    caseId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    sender: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    receiver: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    case: z
      .union([
        z.lazy(() => CaseRelationFilterObjectSchema),
        z.lazy(() => CaseWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const MessageWhereInputObjectSchema = Schema
