import { z } from 'zod'
import { UserUpdateWithoutCaseNotesAsAuthorInputObjectSchema } from './UserUpdateWithoutCaseNotesAsAuthorInput.schema'
import { UserUncheckedUpdateWithoutCaseNotesAsAuthorInputObjectSchema } from './UserUncheckedUpdateWithoutCaseNotesAsAuthorInput.schema'
import { UserCreateWithoutCaseNotesAsAuthorInputObjectSchema } from './UserCreateWithoutCaseNotesAsAuthorInput.schema'
import { UserUncheckedCreateWithoutCaseNotesAsAuthorInputObjectSchema } from './UserUncheckedCreateWithoutCaseNotesAsAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutCaseNotesAsAuthorInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCaseNotesAsAuthorInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutCaseNotesAsAuthorInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCaseNotesAsAuthorInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutCaseNotesAsAuthorInputObjectSchema,
      ),
    ]),
  })
  .strict()

export const UserUpsertWithoutCaseNotesAsAuthorInputObjectSchema = Schema
