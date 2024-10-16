import { z } from 'zod'
import { UserCreateWithoutCasesAsClientInputObjectSchema } from './UserCreateWithoutCasesAsClientInput.schema'
import { UserUncheckedCreateWithoutCasesAsClientInputObjectSchema } from './UserUncheckedCreateWithoutCasesAsClientInput.schema'
import { UserCreateOrConnectWithoutCasesAsClientInputObjectSchema } from './UserCreateOrConnectWithoutCasesAsClientInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCasesAsClientInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutCasesAsClientInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutCasesAsClientInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutCasesAsClientInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutCasesAsClientInputObjectSchema = Schema
