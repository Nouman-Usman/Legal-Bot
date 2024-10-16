import { z } from 'zod'
import { OrganizationRoleOrderByWithRelationInputObjectSchema } from './objects/OrganizationRoleOrderByWithRelationInput.schema'
import { OrganizationRoleWhereInputObjectSchema } from './objects/OrganizationRoleWhereInput.schema'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './objects/OrganizationRoleWhereUniqueInput.schema'
import { OrganizationRoleScalarFieldEnumSchema } from './enums/OrganizationRoleScalarFieldEnum.schema'

export const OrganizationRoleFindManySchema = z.object({
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
  distinct: z.array(OrganizationRoleScalarFieldEnumSchema).optional(),
})
