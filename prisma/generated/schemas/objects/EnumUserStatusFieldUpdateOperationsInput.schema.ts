import { z } from 'zod'
import { UserStatusSchema } from '../enums/UserStatus.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumUserStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => UserStatusSchema).optional(),
  })
  .strict()

export const EnumUserStatusFieldUpdateOperationsInputObjectSchema = Schema
