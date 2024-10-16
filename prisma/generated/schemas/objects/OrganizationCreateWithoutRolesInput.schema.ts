import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationCreateWithoutRolesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    pictureUrl: z.string().optional().nullable(),
    stripeCustomerId: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const OrganizationCreateWithoutRolesInputObjectSchema = Schema
