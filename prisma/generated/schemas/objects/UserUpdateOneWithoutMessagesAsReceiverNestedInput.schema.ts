import { z } from 'zod'
import { UserCreateWithoutMessagesAsReceiverInputObjectSchema } from './UserCreateWithoutMessagesAsReceiverInput.schema'
import { UserUncheckedCreateWithoutMessagesAsReceiverInputObjectSchema } from './UserUncheckedCreateWithoutMessagesAsReceiverInput.schema'
import { UserCreateOrConnectWithoutMessagesAsReceiverInputObjectSchema } from './UserCreateOrConnectWithoutMessagesAsReceiverInput.schema'
import { UserUpsertWithoutMessagesAsReceiverInputObjectSchema } from './UserUpsertWithoutMessagesAsReceiverInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutMessagesAsReceiverInputObjectSchema } from './UserUpdateWithoutMessagesAsReceiverInput.schema'
import { UserUncheckedUpdateWithoutMessagesAsReceiverInputObjectSchema } from './UserUncheckedUpdateWithoutMessagesAsReceiverInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutMessagesAsReceiverNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutMessagesAsReceiverInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutMessagesAsReceiverInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutMessagesAsReceiverInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutMessagesAsReceiverInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutMessagesAsReceiverInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutMessagesAsReceiverInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict()

export const UserUpdateOneWithoutMessagesAsReceiverNestedInputObjectSchema =
  Schema
