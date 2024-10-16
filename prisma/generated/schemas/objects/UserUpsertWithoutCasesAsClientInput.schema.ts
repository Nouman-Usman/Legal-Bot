import { z } from 'zod'
import { UserUpdateWithoutCasesAsClientInputObjectSchema } from './UserUpdateWithoutCasesAsClientInput.schema'
import { UserUncheckedUpdateWithoutCasesAsClientInputObjectSchema } from './UserUncheckedUpdateWithoutCasesAsClientInput.schema'
import { UserCreateWithoutCasesAsClientInputObjectSchema } from './UserCreateWithoutCasesAsClientInput.schema'
import { UserUncheckedCreateWithoutCasesAsClientInputObjectSchema } from './UserUncheckedCreateWithoutCasesAsClientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutCasesAsClientInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCasesAsClientInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutCasesAsClientInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCasesAsClientInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCasesAsClientInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutCasesAsClientInputObjectSchema = Schema
