import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutDocumentsAsUploaderInputObjectSchema } from './UserCreateWithoutDocumentsAsUploaderInput.schema'
import { UserUncheckedCreateWithoutDocumentsAsUploaderInputObjectSchema } from './UserUncheckedCreateWithoutDocumentsAsUploaderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDocumentsAsUploaderInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutDocumentsAsUploaderInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutDocumentsAsUploaderInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const UserCreateOrConnectWithoutDocumentsAsUploaderInputObjectSchema =
  Schema
