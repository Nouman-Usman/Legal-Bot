import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutMessagesAsSenderInputObjectSchema } from './UserCreateWithoutMessagesAsSenderInput.schema'
import { UserUncheckedCreateWithoutMessagesAsSenderInputObjectSchema } from './UserUncheckedCreateWithoutMessagesAsSenderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutMessagesAsSenderInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutMessagesAsSenderInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutMessagesAsSenderInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const UserCreateOrConnectWithoutMessagesAsSenderInputObjectSchema =
  Schema
