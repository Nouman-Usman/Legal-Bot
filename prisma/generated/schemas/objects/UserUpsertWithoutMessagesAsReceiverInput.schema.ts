import { z } from 'zod'
import { UserUpdateWithoutMessagesAsReceiverInputObjectSchema } from './UserUpdateWithoutMessagesAsReceiverInput.schema'
import { UserUncheckedUpdateWithoutMessagesAsReceiverInputObjectSchema } from './UserUncheckedUpdateWithoutMessagesAsReceiverInput.schema'
import { UserCreateWithoutMessagesAsReceiverInputObjectSchema } from './UserCreateWithoutMessagesAsReceiverInput.schema'
import { UserUncheckedCreateWithoutMessagesAsReceiverInputObjectSchema } from './UserUncheckedCreateWithoutMessagesAsReceiverInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutMessagesAsReceiverInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutMessagesAsReceiverInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutMessagesAsReceiverInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutMessagesAsReceiverInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutMessagesAsReceiverInputObjectSchema,
      ),
    ]),
  })
  .strict()

export const UserUpsertWithoutMessagesAsReceiverInputObjectSchema = Schema
