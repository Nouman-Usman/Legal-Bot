import { z } from 'zod'
import { UserStatusSchema } from '../enums/UserStatus.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumUserStatusFilterObjectSchema } from './NestedEnumUserStatusFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumUserStatusWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumUserStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumUserStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumUserStatusFilterObjectSchema).optional(),
  })
  .strict()

export const NestedEnumUserStatusWithAggregatesFilterObjectSchema = Schema
