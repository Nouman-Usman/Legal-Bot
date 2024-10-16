import { z } from 'zod'
import { UserStatusSchema } from '../enums/UserStatus.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    pictureUrl: z.string().optional().nullable(),
    tokenInvitation: z.string().optional().nullable(),
    stripeCustomerId: z.string().optional().nullable(),
    status: z.lazy(() => UserStatusSchema).optional(),
    globalRole: z.string().optional(),
    password: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const UserCreateManyInputObjectSchema = Schema
