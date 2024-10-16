import { z } from 'zod'
import { UserUpdateWithoutDocumentsAsUploaderInputObjectSchema } from './UserUpdateWithoutDocumentsAsUploaderInput.schema'
import { UserUncheckedUpdateWithoutDocumentsAsUploaderInputObjectSchema } from './UserUncheckedUpdateWithoutDocumentsAsUploaderInput.schema'
import { UserCreateWithoutDocumentsAsUploaderInputObjectSchema } from './UserCreateWithoutDocumentsAsUploaderInput.schema'
import { UserUncheckedCreateWithoutDocumentsAsUploaderInputObjectSchema } from './UserUncheckedCreateWithoutDocumentsAsUploaderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutDocumentsAsUploaderInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutDocumentsAsUploaderInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutDocumentsAsUploaderInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutDocumentsAsUploaderInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutDocumentsAsUploaderInputObjectSchema,
      ),
    ]),
  })
  .strict()

export const UserUpsertWithoutDocumentsAsUploaderInputObjectSchema = Schema
