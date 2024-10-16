import { z } from 'zod'
import { OrganizationRoleWhereInputObjectSchema } from './objects/OrganizationRoleWhereInput.schema'
import { OrganizationRoleOrderByWithAggregationInputObjectSchema } from './objects/OrganizationRoleOrderByWithAggregationInput.schema'
import { OrganizationRoleScalarWhereWithAggregatesInputObjectSchema } from './objects/OrganizationRoleScalarWhereWithAggregatesInput.schema'
import { OrganizationRoleScalarFieldEnumSchema } from './enums/OrganizationRoleScalarFieldEnum.schema'

export const OrganizationRoleGroupBySchema = z.object({
  where: OrganizationRoleWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      OrganizationRoleOrderByWithAggregationInputObjectSchema,
      OrganizationRoleOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: OrganizationRoleScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(OrganizationRoleScalarFieldEnumSchema),
})
