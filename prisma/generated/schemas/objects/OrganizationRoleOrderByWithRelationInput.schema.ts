import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'
import { OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    organizationId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    organization: z
      .lazy(() => OrganizationOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const OrganizationRoleOrderByWithRelationInputObjectSchema = Schema
