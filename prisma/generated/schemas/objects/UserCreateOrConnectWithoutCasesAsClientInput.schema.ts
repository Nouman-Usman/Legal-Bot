import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutCasesAsClientInputObjectSchema } from './UserCreateWithoutCasesAsClientInput.schema'
import { UserUncheckedCreateWithoutCasesAsClientInputObjectSchema } from './UserUncheckedCreateWithoutCasesAsClientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCasesAsClientInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutCasesAsClientInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCasesAsClientInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutCasesAsClientInputObjectSchema = Schema
