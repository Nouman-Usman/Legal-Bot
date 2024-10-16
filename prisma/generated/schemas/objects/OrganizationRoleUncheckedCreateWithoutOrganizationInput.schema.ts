import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleUncheckedCreateWithoutOrganizationInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      userId: z.string(),
    })
    .strict()

export const OrganizationRoleUncheckedCreateWithoutOrganizationInputObjectSchema =
  Schema
