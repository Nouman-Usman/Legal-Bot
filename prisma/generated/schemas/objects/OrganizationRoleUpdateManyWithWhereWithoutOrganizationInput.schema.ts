import { z } from 'zod'
import { OrganizationRoleScalarWhereInputObjectSchema } from './OrganizationRoleScalarWhereInput.schema'
import { OrganizationRoleUpdateManyMutationInputObjectSchema } from './OrganizationRoleUpdateManyMutationInput.schema'
import { OrganizationRoleUncheckedUpdateManyWithoutRolesInputObjectSchema } from './OrganizationRoleUncheckedUpdateManyWithoutRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleUpdateManyWithWhereWithoutOrganizationInput> =
  z
    .object({
      where: z.lazy(() => OrganizationRoleScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => OrganizationRoleUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            OrganizationRoleUncheckedUpdateManyWithoutRolesInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const OrganizationRoleUpdateManyWithWhereWithoutOrganizationInputObjectSchema =
  Schema
