import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { DocumentCountOrderByAggregateInputObjectSchema } from './DocumentCountOrderByAggregateInput.schema'
import { DocumentMaxOrderByAggregateInputObjectSchema } from './DocumentMaxOrderByAggregateInput.schema'
import { DocumentMinOrderByAggregateInputObjectSchema } from './DocumentMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    documentUrl: z
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
    uploadDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    caseId: z.lazy(() => SortOrderSchema).optional(),
    uploaderId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DocumentCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => DocumentMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DocumentMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const DocumentOrderByWithAggregationInputObjectSchema = Schema
