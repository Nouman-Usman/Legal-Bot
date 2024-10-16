import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutMessagesAsReceiverInputObjectSchema } from './UserCreateWithoutMessagesAsReceiverInput.schema'
import { UserUncheckedCreateWithoutMessagesAsReceiverInputObjectSchema } from './UserUncheckedCreateWithoutMessagesAsReceiverInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutMessagesAsReceiverInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutMessagesAsReceiverInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutMessagesAsReceiverInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const UserCreateOrConnectWithoutMessagesAsReceiverInputObjectSchema =
  Schema
