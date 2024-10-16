import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { EnumUserStatusFilterObjectSchema } from './EnumUserStatusFilter.schema'
import { UserStatusSchema } from '../enums/UserStatus.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { OrganizationRoleListRelationFilterObjectSchema } from './OrganizationRoleListRelationFilter.schema'
import { LawyerProfileListRelationFilterObjectSchema } from './LawyerProfileListRelationFilter.schema'
import { CaseListRelationFilterObjectSchema } from './CaseListRelationFilter.schema'
import { CaseNoteListRelationFilterObjectSchema } from './CaseNoteListRelationFilter.schema'
import { MessageListRelationFilterObjectSchema } from './MessageListRelationFilter.schema'
import { DocumentListRelationFilterObjectSchema } from './DocumentListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    pictureUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tokenInvitation: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    stripeCustomerId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    status: z
      .union([
        z.lazy(() => EnumUserStatusFilterObjectSchema),
        z.lazy(() => UserStatusSchema),
      ])
      .optional(),
    globalRole: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    organizationRoles: z
      .lazy(() => OrganizationRoleListRelationFilterObjectSchema)
      .optional(),
    lawyerProfiles: z
      .lazy(() => LawyerProfileListRelationFilterObjectSchema)
      .optional(),
    casesAsClient: z.lazy(() => CaseListRelationFilterObjectSchema).optional(),
    caseNotesAsAuthor: z
      .lazy(() => CaseNoteListRelationFilterObjectSchema)
      .optional(),
    messagesAsSender: z
      .lazy(() => MessageListRelationFilterObjectSchema)
      .optional(),
    messagesAsReceiver: z
      .lazy(() => MessageListRelationFilterObjectSchema)
      .optional(),
    documentsAsUploader: z
      .lazy(() => DocumentListRelationFilterObjectSchema)
      .optional(),
  })
  .strict()

export const UserWhereInputObjectSchema = Schema
