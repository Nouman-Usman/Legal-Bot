import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutCaseNotesAsAuthorInputObjectSchema } from './UserCreateWithoutCaseNotesAsAuthorInput.schema'
import { UserUncheckedCreateWithoutCaseNotesAsAuthorInputObjectSchema } from './UserUncheckedCreateWithoutCaseNotesAsAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCaseNotesAsAuthorInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutCaseNotesAsAuthorInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutCaseNotesAsAuthorInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const UserCreateOrConnectWithoutCaseNotesAsAuthorInputObjectSchema =
  Schema
