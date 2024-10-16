import { z } from 'zod'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './objects/OrganizationRoleWhereUniqueInput.schema'

export const OrganizationRoleFindUniqueSchema = z.object({
  where: OrganizationRoleWhereUniqueInputObjectSchema,
})
