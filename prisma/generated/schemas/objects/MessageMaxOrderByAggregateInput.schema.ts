import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    senderId: z.lazy(() => SortOrderSchema).optional(),
    receiverId: z.lazy(() => SortOrderSchema).optional(),
    caseId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const MessageMaxOrderByAggregateInputObjectSchema = Schema
