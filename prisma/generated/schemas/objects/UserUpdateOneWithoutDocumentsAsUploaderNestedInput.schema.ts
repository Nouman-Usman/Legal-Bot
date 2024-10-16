import { z } from 'zod'
import { UserCreateWithoutDocumentsAsUploaderInputObjectSchema } from './UserCreateWithoutDocumentsAsUploaderInput.schema'
import { UserUncheckedCreateWithoutDocumentsAsUploaderInputObjectSchema } from './UserUncheckedCreateWithoutDocumentsAsUploaderInput.schema'
import { UserCreateOrConnectWithoutDocumentsAsUploaderInputObjectSchema } from './UserCreateOrConnectWithoutDocumentsAsUploaderInput.schema'
import { UserUpsertWithoutDocumentsAsUploaderInputObjectSchema } from './UserUpsertWithoutDocumentsAsUploaderInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutDocumentsAsUploaderInputObjectSchema } from './UserUpdateWithoutDocumentsAsUploaderInput.schema'
import { UserUncheckedUpdateWithoutDocumentsAsUploaderInputObjectSchema } from './UserUncheckedUpdateWithoutDocumentsAsUploaderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutDocumentsAsUploaderNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutDocumentsAsUploaderInputObjectSchema),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutDocumentsAsUploaderInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutDocumentsAsUploaderInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutDocumentsAsUploaderInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutDocumentsAsUploaderInputObjectSchema),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutDocumentsAsUploaderInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict()

export const UserUpdateOneWithoutDocumentsAsUploaderNestedInputObjectSchema =
  Schema
