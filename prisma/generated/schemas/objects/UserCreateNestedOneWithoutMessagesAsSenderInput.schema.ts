import { z } from 'zod'
import { UserCreateWithoutMessagesAsSenderInputObjectSchema } from './UserCreateWithoutMessagesAsSenderInput.schema'
import { UserUncheckedCreateWithoutMessagesAsSenderInputObjectSchema } from './UserUncheckedCreateWithoutMessagesAsSenderInput.schema'
import { UserCreateOrConnectWithoutMessagesAsSenderInputObjectSchema } from './UserCreateOrConnectWithoutMessagesAsSenderInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutMessagesAsSenderInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutMessagesAsSenderInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutMessagesAsSenderInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutMessagesAsSenderInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const UserCreateNestedOneWithoutMessagesAsSenderInputObjectSchema =
  Schema
