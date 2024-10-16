import { z } from 'zod'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './OrganizationRoleWhereUniqueInput.schema'
import { OrganizationRoleUpdateWithoutUserInputObjectSchema } from './OrganizationRoleUpdateWithoutUserInput.schema'
import { OrganizationRoleUncheckedUpdateWithoutUserInputObjectSchema } from './OrganizationRoleUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => OrganizationRoleUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => OrganizationRoleUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const OrganizationRoleUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema
