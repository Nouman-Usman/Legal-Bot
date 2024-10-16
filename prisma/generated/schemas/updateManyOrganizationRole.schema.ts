import { z } from 'zod'
import { OrganizationRoleUpdateManyMutationInputObjectSchema } from './objects/OrganizationRoleUpdateManyMutationInput.schema'
import { OrganizationRoleWhereInputObjectSchema } from './objects/OrganizationRoleWhereInput.schema'

export const OrganizationRoleUpdateManySchema = z.object({
  data: OrganizationRoleUpdateManyMutationInputObjectSchema,
  where: OrganizationRoleWhereInputObjectSchema.optional(),
})
