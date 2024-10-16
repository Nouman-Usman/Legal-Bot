import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { OrganizationRoleOrderByRelationAggregateInputObjectSchema } from './OrganizationRoleOrderByRelationAggregateInput.schema'
import { LawyerProfileOrderByRelationAggregateInputObjectSchema } from './LawyerProfileOrderByRelationAggregateInput.schema'
import { CaseOrderByRelationAggregateInputObjectSchema } from './CaseOrderByRelationAggregateInput.schema'
import { CaseNoteOrderByRelationAggregateInputObjectSchema } from './CaseNoteOrderByRelationAggregateInput.schema'
import { MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema'
import { DocumentOrderByRelationAggregateInputObjectSchema } from './DocumentOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    pictureUrl: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    tokenInvitation: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    stripeCustomerId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    globalRole: z.lazy(() => SortOrderSchema).optional(),
    password: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    organizationRoles: z
      .lazy(() => OrganizationRoleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    lawyerProfiles: z
      .lazy(() => LawyerProfileOrderByRelationAggregateInputObjectSchema)
      .optional(),
    casesAsClient: z
      .lazy(() => CaseOrderByRelationAggregateInputObjectSchema)
      .optional(),
    caseNotesAsAuthor: z
      .lazy(() => CaseNoteOrderByRelationAggregateInputObjectSchema)
      .optional(),
    messagesAsSender: z
      .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    messagesAsReceiver: z
      .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    documentsAsUploader: z
      .lazy(() => DocumentOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserOrderByWithRelationInputObjectSchema = Schema
