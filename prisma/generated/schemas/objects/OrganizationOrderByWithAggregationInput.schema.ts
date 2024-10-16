import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { OrganizationCountOrderByAggregateInputObjectSchema } from './OrganizationCountOrderByAggregateInput.schema'
import { OrganizationMaxOrderByAggregateInputObjectSchema } from './OrganizationMaxOrderByAggregateInput.schema'
import { OrganizationMinOrderByAggregateInputObjectSchema } from './OrganizationMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    pictureUrl: z
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
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => OrganizationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => OrganizationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => OrganizationMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const OrganizationOrderByWithAggregationInputObjectSchema = Schema
