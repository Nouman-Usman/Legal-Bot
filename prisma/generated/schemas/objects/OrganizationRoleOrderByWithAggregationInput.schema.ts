import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { OrganizationRoleCountOrderByAggregateInputObjectSchema } from './OrganizationRoleCountOrderByAggregateInput.schema'
import { OrganizationRoleMaxOrderByAggregateInputObjectSchema } from './OrganizationRoleMaxOrderByAggregateInput.schema'
import { OrganizationRoleMinOrderByAggregateInputObjectSchema } from './OrganizationRoleMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    organizationId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => OrganizationRoleCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => OrganizationRoleMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => OrganizationRoleMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const OrganizationRoleOrderByWithAggregationInputObjectSchema = Schema
