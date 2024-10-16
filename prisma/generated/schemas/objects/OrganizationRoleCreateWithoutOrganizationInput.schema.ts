import { z } from 'zod'
import { UserCreateNestedOneWithoutOrganizationRolesInputObjectSchema } from './UserCreateNestedOneWithoutOrganizationRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleCreateWithoutOrganizationInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      user: z.lazy(
        () => UserCreateNestedOneWithoutOrganizationRolesInputObjectSchema,
      ),
    })
    .strict()

export const OrganizationRoleCreateWithoutOrganizationInputObjectSchema = Schema
