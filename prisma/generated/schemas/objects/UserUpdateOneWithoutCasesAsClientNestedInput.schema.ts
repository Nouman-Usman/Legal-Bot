import { z } from 'zod'
import { UserCreateWithoutCasesAsClientInputObjectSchema } from './UserCreateWithoutCasesAsClientInput.schema'
import { UserUncheckedCreateWithoutCasesAsClientInputObjectSchema } from './UserUncheckedCreateWithoutCasesAsClientInput.schema'
import { UserCreateOrConnectWithoutCasesAsClientInputObjectSchema } from './UserCreateOrConnectWithoutCasesAsClientInput.schema'
import { UserUpsertWithoutCasesAsClientInputObjectSchema } from './UserUpsertWithoutCasesAsClientInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutCasesAsClientInputObjectSchema } from './UserUpdateWithoutCasesAsClientInput.schema'
import { UserUncheckedUpdateWithoutCasesAsClientInputObjectSchema } from './UserUncheckedUpdateWithoutCasesAsClientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutCasesAsClientNestedInput> = z
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
    upsert: z
      .lazy(() => UserUpsertWithoutCasesAsClientInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutCasesAsClientInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutCasesAsClientInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneWithoutCasesAsClientNestedInputObjectSchema = Schema
