import { z } from 'zod'
import { OrganizationRoleOrderByWithRelationInputObjectSchema } from './objects/OrganizationRoleOrderByWithRelationInput.schema'
import { OrganizationRoleWhereInputObjectSchema } from './objects/OrganizationRoleWhereInput.schema'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './objects/OrganizationRoleWhereUniqueInput.schema'
import { OrganizationRoleCountAggregateInputObjectSchema } from './objects/OrganizationRoleCountAggregateInput.schema'
import { OrganizationRoleMinAggregateInputObjectSchema } from './objects/OrganizationRoleMinAggregateInput.schema'
import { OrganizationRoleMaxAggregateInputObjectSchema } from './objects/OrganizationRoleMaxAggregateInput.schema'

export const OrganizationRoleAggregateSchema = z.object({
  orderBy: z
    .union([
      OrganizationRoleOrderByWithRelationInputObjectSchema,
      OrganizationRoleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: OrganizationRoleWhereInputObjectSchema.optional(),
  cursor: OrganizationRoleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), OrganizationRoleCountAggregateInputObjectSchema])
    .optional(),
  _min: OrganizationRoleMinAggregateInputObjectSchema.optional(),
  _max: OrganizationRoleMaxAggregateInputObjectSchema.optional(),
})
