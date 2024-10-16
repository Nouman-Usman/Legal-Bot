import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    pictureUrl: z.literal(true).optional(),
    tokenInvitation: z.literal(true).optional(),
    stripeCustomerId: z.literal(true).optional(),
    status: z.literal(true).optional(),
    globalRole: z.literal(true).optional(),
    password: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const UserCountAggregateInputObjectSchema = Schema
