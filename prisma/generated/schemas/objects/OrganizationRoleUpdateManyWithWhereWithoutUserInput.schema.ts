import { z } from 'zod'
import { OrganizationRoleScalarWhereInputObjectSchema } from './OrganizationRoleScalarWhereInput.schema'
import { OrganizationRoleUpdateManyMutationInputObjectSchema } from './OrganizationRoleUpdateManyMutationInput.schema'
import { OrganizationRoleUncheckedUpdateManyWithoutOrganizationRolesInputObjectSchema } from './OrganizationRoleUncheckedUpdateManyWithoutOrganizationRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => OrganizationRoleScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => OrganizationRoleUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            OrganizationRoleUncheckedUpdateManyWithoutOrganizationRolesInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const OrganizationRoleUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema
