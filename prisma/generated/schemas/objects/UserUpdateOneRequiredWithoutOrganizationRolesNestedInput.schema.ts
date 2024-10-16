import { z } from 'zod'
import { UserCreateWithoutOrganizationRolesInputObjectSchema } from './UserCreateWithoutOrganizationRolesInput.schema'
import { UserUncheckedCreateWithoutOrganizationRolesInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationRolesInput.schema'
import { UserCreateOrConnectWithoutOrganizationRolesInputObjectSchema } from './UserCreateOrConnectWithoutOrganizationRolesInput.schema'
import { UserUpsertWithoutOrganizationRolesInputObjectSchema } from './UserUpsertWithoutOrganizationRolesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutOrganizationRolesInputObjectSchema } from './UserUpdateWithoutOrganizationRolesInput.schema'
import { UserUncheckedUpdateWithoutOrganizationRolesInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOrganizationRolesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutOrganizationRolesInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutOrganizationRolesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutOrganizationRolesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutOrganizationRolesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutOrganizationRolesInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutOrganizationRolesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict()

export const UserUpdateOneRequiredWithoutOrganizationRolesNestedInputObjectSchema =
  Schema
