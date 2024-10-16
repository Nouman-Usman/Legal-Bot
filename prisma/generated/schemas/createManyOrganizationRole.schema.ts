import { z } from 'zod'
import { OrganizationRoleCreateManyInputObjectSchema } from './objects/OrganizationRoleCreateManyInput.schema'

export const OrganizationRoleCreateManySchema = z.object({
  data: z.union([
    OrganizationRoleCreateManyInputObjectSchema,
    z.array(OrganizationRoleCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
})
