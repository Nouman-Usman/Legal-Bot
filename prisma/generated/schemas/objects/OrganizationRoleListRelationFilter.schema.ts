import { z } from 'zod'
import { OrganizationRoleWhereInputObjectSchema } from './OrganizationRoleWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleListRelationFilter> = z
  .object({
    every: z.lazy(() => OrganizationRoleWhereInputObjectSchema).optional(),
    some: z.lazy(() => OrganizationRoleWhereInputObjectSchema).optional(),
    none: z.lazy(() => OrganizationRoleWhereInputObjectSchema).optional(),
  })
  .strict()

export const OrganizationRoleListRelationFilterObjectSchema = Schema
