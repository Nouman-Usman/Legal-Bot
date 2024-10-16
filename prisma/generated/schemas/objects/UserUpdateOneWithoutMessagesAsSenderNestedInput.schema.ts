import { z } from 'zod'
import { UserCreateWithoutMessagesAsSenderInputObjectSchema } from './UserCreateWithoutMessagesAsSenderInput.schema'
import { UserUncheckedCreateWithoutMessagesAsSenderInputObjectSchema } from './UserUncheckedCreateWithoutMessagesAsSenderInput.schema'
import { UserCreateOrConnectWithoutMessagesAsSenderInputObjectSchema } from './UserCreateOrConnectWithoutMessagesAsSenderInput.schema'
import { UserUpsertWithoutMessagesAsSenderInputObjectSchema } from './UserUpsertWithoutMessagesAsSenderInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutMessagesAsSenderInputObjectSchema } from './UserUpdateWithoutMessagesAsSenderInput.schema'
import { UserUncheckedUpdateWithoutMessagesAsSenderInputObjectSchema } from './UserUncheckedUpdateWithoutMessagesAsSenderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutMessagesAsSenderNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutMessagesAsSenderInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutMessagesAsSenderInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutMessagesAsSenderInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict()

export const UserUpdateOneWithoutMessagesAsSenderNestedInputObjectSchema =
  Schema
