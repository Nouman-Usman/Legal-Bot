import { z } from 'zod'
import { OrganizationRoleCreateInputObjectSchema } from './objects/OrganizationRoleCreateInput.schema'
import { OrganizationRoleUncheckedCreateInputObjectSchema } from './objects/OrganizationRoleUncheckedCreateInput.schema'

export const OrganizationRoleCreateOneSchema = z.object({
  data: z.union([
    OrganizationRoleCreateInputObjectSchema,
    OrganizationRoleUncheckedCreateInputObjectSchema,
  ]),
})
