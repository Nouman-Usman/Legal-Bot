import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      organizationId: z.string(),
    })
    .strict()

export const OrganizationRoleUncheckedCreateWithoutUserInputObjectSchema =
  Schema
