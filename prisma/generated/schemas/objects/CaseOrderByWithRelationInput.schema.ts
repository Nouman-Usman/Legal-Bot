import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { LawyerProfileOrderByWithRelationInputObjectSchema } from './LawyerProfileOrderByWithRelationInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'
import { InvoiceOrderByRelationAggregateInputObjectSchema } from './InvoiceOrderByRelationAggregateInput.schema'
import { CaseNoteOrderByRelationAggregateInputObjectSchema } from './CaseNoteOrderByRelationAggregateInput.schema'
import { MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema'
import { DocumentOrderByRelationAggregateInputObjectSchema } from './DocumentOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    caseNumber: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    startDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    endDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    lawyerProfileId: z.lazy(() => SortOrderSchema).optional(),
    clientId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    lawyerProfile: z
      .lazy(() => LawyerProfileOrderByWithRelationInputObjectSchema)
      .optional(),
    client: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    invoices: z
      .lazy(() => InvoiceOrderByRelationAggregateInputObjectSchema)
      .optional(),
    caseNotes: z
      .lazy(() => CaseNoteOrderByRelationAggregateInputObjectSchema)
      .optional(),
    messages: z
      .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    documents: z
      .lazy(() => DocumentOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const CaseOrderByWithRelationInputObjectSchema = Schema
