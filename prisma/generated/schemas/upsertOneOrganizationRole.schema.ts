import { z } from 'zod'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './objects/OrganizationRoleWhereUniqueInput.schema'
import { OrganizationRoleCreateInputObjectSchema } from './objects/OrganizationRoleCreateInput.schema'
import { OrganizationRoleUncheckedCreateInputObjectSchema } from './objects/OrganizationRoleUncheckedCreateInput.schema'
import { OrganizationRoleUpdateInputObjectSchema } from './objects/OrganizationRoleUpdateInput.schema'
import { OrganizationRoleUncheckedUpdateInputObjectSchema } from './objects/OrganizationRoleUncheckedUpdateInput.schema'

export const OrganizationRoleUpsertSchema = z.object({
  where: OrganizationRoleWhereUniqueInputObjectSchema,
  create: z.union([
    OrganizationRoleCreateInputObjectSchema,
    OrganizationRoleUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    OrganizationRoleUpdateInputObjectSchema,
    OrganizationRoleUncheckedUpdateInputObjectSchema,
  ]),
})
