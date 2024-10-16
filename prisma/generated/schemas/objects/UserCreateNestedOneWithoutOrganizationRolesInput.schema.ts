import { z } from 'zod'
import { UserCreateWithoutOrganizationRolesInputObjectSchema } from './UserCreateWithoutOrganizationRolesInput.schema'
import { UserUncheckedCreateWithoutOrganizationRolesInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationRolesInput.schema'
import { UserCreateOrConnectWithoutOrganizationRolesInputObjectSchema } from './UserCreateOrConnectWithoutOrganizationRolesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutOrganizationRolesInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const UserCreateNestedOneWithoutOrganizationRolesInputObjectSchema =
  Schema
