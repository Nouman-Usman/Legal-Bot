import { z } from 'zod'
import { UserStatusSchema } from '../enums/UserStatus.schema'
import { NestedEnumUserStatusFilterObjectSchema } from './NestedEnumUserStatusFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumUserStatusFilter> = z
  .object({
    equals: z.lazy(() => UserStatusSchema).optional(),
    in: z
      .union([
        z.lazy(() => UserStatusSchema).array(),
        z.lazy(() => UserStatusSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => UserStatusSchema).array(),
        z.lazy(() => UserStatusSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => UserStatusSchema),
        z.lazy(() => NestedEnumUserStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EnumUserStatusFilterObjectSchema = Schema
