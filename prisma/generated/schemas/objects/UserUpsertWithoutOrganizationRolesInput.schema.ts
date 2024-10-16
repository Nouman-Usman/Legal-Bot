import { z } from 'zod'
import { UserUpdateWithoutOrganizationRolesInputObjectSchema } from './UserUpdateWithoutOrganizationRolesInput.schema'
import { UserUncheckedUpdateWithoutOrganizationRolesInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationRolesInput.schema'
import { UserCreateWithoutOrganizationRolesInputObjectSchema } from './UserCreateWithoutOrganizationRolesInput.schema'
import { UserUncheckedCreateWithoutOrganizationRolesInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutOrganizationRolesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutOrganizationRolesInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutOrganizationRolesInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutOrganizationRolesInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutOrganizationRolesInputObjectSchema,
      ),
    ]),
  })
  .strict()

export const UserUpsertWithoutOrganizationRolesInputObjectSchema = Schema
