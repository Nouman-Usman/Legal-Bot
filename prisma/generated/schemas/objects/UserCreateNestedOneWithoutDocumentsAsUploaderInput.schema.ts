import { z } from 'zod'
import { UserCreateWithoutDocumentsAsUploaderInputObjectSchema } from './UserCreateWithoutDocumentsAsUploaderInput.schema'
import { UserUncheckedCreateWithoutDocumentsAsUploaderInputObjectSchema } from './UserUncheckedCreateWithoutDocumentsAsUploaderInput.schema'
import { UserCreateOrConnectWithoutDocumentsAsUploaderInputObjectSchema } from './UserCreateOrConnectWithoutDocumentsAsUploaderInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutDocumentsAsUploaderInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const UserCreateNestedOneWithoutDocumentsAsUploaderInputObjectSchema =
  Schema
