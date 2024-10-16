import { z } from 'zod'
import { OrganizationRoleWhereInputObjectSchema } from './objects/OrganizationRoleWhereInput.schema'

export const OrganizationRoleDeleteManySchema = z.object({
  where: OrganizationRoleWhereInputObjectSchema.optional(),
})
