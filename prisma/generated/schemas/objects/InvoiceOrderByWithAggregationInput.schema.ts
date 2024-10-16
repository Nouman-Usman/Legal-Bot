import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { InvoiceCountOrderByAggregateInputObjectSchema } from './InvoiceCountOrderByAggregateInput.schema'
import { InvoiceMaxOrderByAggregateInputObjectSchema } from './InvoiceMaxOrderByAggregateInput.schema'
import { InvoiceMinOrderByAggregateInputObjectSchema } from './InvoiceMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.InvoiceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    issueDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    dueDate: z
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
    details: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    caseId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => InvoiceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => InvoiceMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => InvoiceMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const InvoiceOrderByWithAggregationInputObjectSchema = Schema
