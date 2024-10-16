import { z } from 'zod'
import { OrganizationCreateNestedOneWithoutRolesInputObjectSchema } from './OrganizationCreateNestedOneWithoutRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    organization: z.lazy(
      () => OrganizationCreateNestedOneWithoutRolesInputObjectSchema,
    ),
  })
  .strict()

export const OrganizationRoleCreateWithoutUserInputObjectSchema = Schema
