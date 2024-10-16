import { z } from 'zod'
import { OrganizationRoleUpdateInputObjectSchema } from './objects/OrganizationRoleUpdateInput.schema'
import { OrganizationRoleUncheckedUpdateInputObjectSchema } from './objects/OrganizationRoleUncheckedUpdateInput.schema'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './objects/OrganizationRoleWhereUniqueInput.schema'

export const OrganizationRoleUpdateOneSchema = z.object({
  data: z.union([
    OrganizationRoleUpdateInputObjectSchema,
    OrganizationRoleUncheckedUpdateInputObjectSchema,
  ]),
  where: OrganizationRoleWhereUniqueInputObjectSchema,
})
