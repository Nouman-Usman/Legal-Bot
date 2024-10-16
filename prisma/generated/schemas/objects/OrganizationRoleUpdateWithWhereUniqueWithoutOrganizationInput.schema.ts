import { z } from 'zod'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './OrganizationRoleWhereUniqueInput.schema'
import { OrganizationRoleUpdateWithoutOrganizationInputObjectSchema } from './OrganizationRoleUpdateWithoutOrganizationInput.schema'
import { OrganizationRoleUncheckedUpdateWithoutOrganizationInputObjectSchema } from './OrganizationRoleUncheckedUpdateWithoutOrganizationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleUpdateWithWhereUniqueWithoutOrganizationInput> =
  z
    .object({
      where: z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => OrganizationRoleUpdateWithoutOrganizationInputObjectSchema,
        ),
        z.lazy(
          () =>
            OrganizationRoleUncheckedUpdateWithoutOrganizationInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const OrganizationRoleUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema =
  Schema
