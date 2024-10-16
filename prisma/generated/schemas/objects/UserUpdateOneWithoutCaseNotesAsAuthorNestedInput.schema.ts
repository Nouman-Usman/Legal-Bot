import { z } from 'zod'
import { UserCreateWithoutCaseNotesAsAuthorInputObjectSchema } from './UserCreateWithoutCaseNotesAsAuthorInput.schema'
import { UserUncheckedCreateWithoutCaseNotesAsAuthorInputObjectSchema } from './UserUncheckedCreateWithoutCaseNotesAsAuthorInput.schema'
import { UserCreateOrConnectWithoutCaseNotesAsAuthorInputObjectSchema } from './UserCreateOrConnectWithoutCaseNotesAsAuthorInput.schema'
import { UserUpsertWithoutCaseNotesAsAuthorInputObjectSchema } from './UserUpsertWithoutCaseNotesAsAuthorInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutCaseNotesAsAuthorInputObjectSchema } from './UserUpdateWithoutCaseNotesAsAuthorInput.schema'
import { UserUncheckedUpdateWithoutCaseNotesAsAuthorInputObjectSchema } from './UserUncheckedUpdateWithoutCaseNotesAsAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutCaseNotesAsAuthorNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCaseNotesAsAuthorInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutCaseNotesAsAuthorInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutCaseNotesAsAuthorInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutCaseNotesAsAuthorInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutCaseNotesAsAuthorInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutCaseNotesAsAuthorInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict()

export const UserUpdateOneWithoutCaseNotesAsAuthorNestedInputObjectSchema =
  Schema
