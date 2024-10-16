import { z } from 'zod'
import { OrganizationRoleCreateNestedManyWithoutOrganizationInputObjectSchema } from './OrganizationRoleCreateNestedManyWithoutOrganizationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    pictureUrl: z.string().optional().nullable(),
    stripeCustomerId: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    roles: z
      .lazy(
        () =>
          OrganizationRoleCreateNestedManyWithoutOrganizationInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const OrganizationCreateInputObjectSchema = Schema
