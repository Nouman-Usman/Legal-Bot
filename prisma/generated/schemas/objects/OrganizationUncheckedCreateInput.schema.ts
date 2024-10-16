import { z } from 'zod'
import { OrganizationRoleUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './OrganizationRoleUncheckedCreateNestedManyWithoutOrganizationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationUncheckedCreateInput> = z
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
          OrganizationRoleUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const OrganizationUncheckedCreateInputObjectSchema = Schema
