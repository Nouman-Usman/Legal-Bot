import { z } from 'zod'
import { UserCreateNestedOneWithoutOrganizationRolesInputObjectSchema } from './UserCreateNestedOneWithoutOrganizationRolesInput.schema'
import { OrganizationCreateNestedOneWithoutRolesInputObjectSchema } from './OrganizationCreateNestedOneWithoutRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutOrganizationRolesInputObjectSchema,
    ),
    organization: z.lazy(
      () => OrganizationCreateNestedOneWithoutRolesInputObjectSchema,
    ),
  })
  .strict()

export const OrganizationRoleCreateInputObjectSchema = Schema
