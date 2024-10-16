import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { CaseCountOrderByAggregateInputObjectSchema } from './CaseCountOrderByAggregateInput.schema'
import { CaseMaxOrderByAggregateInputObjectSchema } from './CaseMaxOrderByAggregateInput.schema'
import { CaseMinOrderByAggregateInputObjectSchema } from './CaseMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseOrderByWithAggregationInput> = z
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
    _count: z.lazy(() => CaseCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CaseMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CaseMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const CaseOrderByWithAggregationInputObjectSchema = Schema
