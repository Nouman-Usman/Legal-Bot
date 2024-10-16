import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutOrganizationRolesInputObjectSchema } from './UserCreateWithoutOrganizationRolesInput.schema'
import { UserUncheckedCreateWithoutOrganizationRolesInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrganizationRolesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutOrganizationRolesInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutOrganizationRolesInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const UserCreateOrConnectWithoutOrganizationRolesInputObjectSchema =
  Schema
