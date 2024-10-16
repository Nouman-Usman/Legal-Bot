import { z } from 'zod'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './OrganizationRoleWhereUniqueInput.schema'
import { OrganizationRoleCreateWithoutUserInputObjectSchema } from './OrganizationRoleCreateWithoutUserInput.schema'
import { OrganizationRoleUncheckedCreateWithoutUserInputObjectSchema } from './OrganizationRoleUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => OrganizationRoleCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => OrganizationRoleUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const OrganizationRoleCreateOrConnectWithoutUserInputObjectSchema =
  Schema
