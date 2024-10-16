import { z } from 'zod'
import { UserCreateWithoutCaseNotesAsAuthorInputObjectSchema } from './UserCreateWithoutCaseNotesAsAuthorInput.schema'
import { UserUncheckedCreateWithoutCaseNotesAsAuthorInputObjectSchema } from './UserUncheckedCreateWithoutCaseNotesAsAuthorInput.schema'
import { UserCreateOrConnectWithoutCaseNotesAsAuthorInputObjectSchema } from './UserCreateOrConnectWithoutCaseNotesAsAuthorInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCaseNotesAsAuthorInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const UserCreateNestedOneWithoutCaseNotesAsAuthorInputObjectSchema =
  Schema
