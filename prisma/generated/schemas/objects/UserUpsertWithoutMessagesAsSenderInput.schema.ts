import { z } from 'zod'
import { UserUpdateWithoutMessagesAsSenderInputObjectSchema } from './UserUpdateWithoutMessagesAsSenderInput.schema'
import { UserUncheckedUpdateWithoutMessagesAsSenderInputObjectSchema } from './UserUncheckedUpdateWithoutMessagesAsSenderInput.schema'
import { UserCreateWithoutMessagesAsSenderInputObjectSchema } from './UserCreateWithoutMessagesAsSenderInput.schema'
import { UserUncheckedCreateWithoutMessagesAsSenderInputObjectSchema } from './UserUncheckedCreateWithoutMessagesAsSenderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutMessagesAsSenderInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutMessagesAsSenderInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutMessagesAsSenderInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutMessagesAsSenderInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutMessagesAsSenderInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutMessagesAsSenderInputObjectSchema = Schema
