import { z } from 'zod'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './OrganizationRoleWhereUniqueInput.schema'
import { OrganizationRoleCreateWithoutOrganizationInputObjectSchema } from './OrganizationRoleCreateWithoutOrganizationInput.schema'
import { OrganizationRoleUncheckedCreateWithoutOrganizationInputObjectSchema } from './OrganizationRoleUncheckedCreateWithoutOrganizationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleCreateOrConnectWithoutOrganizationInput> =
  z
    .object({
      where: z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => OrganizationRoleCreateWithoutOrganizationInputObjectSchema,
        ),
        z.lazy(
          () =>
            OrganizationRoleUncheckedCreateWithoutOrganizationInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const OrganizationRoleCreateOrConnectWithoutOrganizationInputObjectSchema =
  Schema
