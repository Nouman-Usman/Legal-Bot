import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { UserCountOrderByAggregateInputObjectSchema } from './UserCountOrderByAggregateInput.schema'
import { UserMaxOrderByAggregateInputObjectSchema } from './UserMaxOrderByAggregateInput.schema'
import { UserMinOrderByAggregateInputObjectSchema } from './UserMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z
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
    _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const UserOrderByWithAggregationInputObjectSchema = Schema
