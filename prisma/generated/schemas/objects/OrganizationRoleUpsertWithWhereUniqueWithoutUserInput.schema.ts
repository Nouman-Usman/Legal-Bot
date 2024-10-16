import { z } from 'zod'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './OrganizationRoleWhereUniqueInput.schema'
import { OrganizationRoleUpdateWithoutUserInputObjectSchema } from './OrganizationRoleUpdateWithoutUserInput.schema'
import { OrganizationRoleUncheckedUpdateWithoutUserInputObjectSchema } from './OrganizationRoleUncheckedUpdateWithoutUserInput.schema'
import { OrganizationRoleCreateWithoutUserInputObjectSchema } from './OrganizationRoleCreateWithoutUserInput.schema'
import { OrganizationRoleUncheckedCreateWithoutUserInputObjectSchema } from './OrganizationRoleUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => OrganizationRoleUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => OrganizationRoleUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => OrganizationRoleCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => OrganizationRoleUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const OrganizationRoleUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema
