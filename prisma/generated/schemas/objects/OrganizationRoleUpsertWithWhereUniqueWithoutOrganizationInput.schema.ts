import { z } from 'zod'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './OrganizationRoleWhereUniqueInput.schema'
import { OrganizationRoleUpdateWithoutOrganizationInputObjectSchema } from './OrganizationRoleUpdateWithoutOrganizationInput.schema'
import { OrganizationRoleUncheckedUpdateWithoutOrganizationInputObjectSchema } from './OrganizationRoleUncheckedUpdateWithoutOrganizationInput.schema'
import { OrganizationRoleCreateWithoutOrganizationInputObjectSchema } from './OrganizationRoleCreateWithoutOrganizationInput.schema'
import { OrganizationRoleUncheckedCreateWithoutOrganizationInputObjectSchema } from './OrganizationRoleUncheckedCreateWithoutOrganizationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleUpsertWithWhereUniqueWithoutOrganizationInput> =
  z
    .object({
      where: z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => OrganizationRoleUpdateWithoutOrganizationInputObjectSchema,
        ),
        z.lazy(
          () =>
            OrganizationRoleUncheckedUpdateWithoutOrganizationInputObjectSchema,
        ),
      ]),
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

export const OrganizationRoleUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema =
  Schema
