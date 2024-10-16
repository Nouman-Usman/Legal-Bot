import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { CaseNoteCountOrderByAggregateInputObjectSchema } from './CaseNoteCountOrderByAggregateInput.schema'
import { CaseNoteMaxOrderByAggregateInputObjectSchema } from './CaseNoteMaxOrderByAggregateInput.schema'
import { CaseNoteMinOrderByAggregateInputObjectSchema } from './CaseNoteMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    noteContent: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    createdDate: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    caseId: z.lazy(() => SortOrderSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CaseNoteCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => CaseNoteMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CaseNoteMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const CaseNoteOrderByWithAggregationInputObjectSchema = Schema
