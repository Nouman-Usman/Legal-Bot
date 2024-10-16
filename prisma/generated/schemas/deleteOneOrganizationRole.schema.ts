import { z } from 'zod'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './objects/OrganizationRoleWhereUniqueInput.schema'

export const OrganizationRoleDeleteOneSchema = z.object({
  where: OrganizationRoleWhereUniqueInputObjectSchema,
})
