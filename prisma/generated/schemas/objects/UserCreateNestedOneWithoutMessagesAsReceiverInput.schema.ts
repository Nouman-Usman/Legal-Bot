import { z } from 'zod'
import { UserCreateWithoutMessagesAsReceiverInputObjectSchema } from './UserCreateWithoutMessagesAsReceiverInput.schema'
import { UserUncheckedCreateWithoutMessagesAsReceiverInputObjectSchema } from './UserUncheckedCreateWithoutMessagesAsReceiverInput.schema'
import { UserCreateOrConnectWithoutMessagesAsReceiverInputObjectSchema } from './UserCreateOrConnectWithoutMessagesAsReceiverInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutMessagesAsReceiverInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const UserCreateNestedOneWithoutMessagesAsReceiverInputObjectSchema =
  Schema
