import { z } from 'zod'
import { OrganizationCreateWithoutRolesInputObjectSchema } from './OrganizationCreateWithoutRolesInput.schema'
import { OrganizationUncheckedCreateWithoutRolesInputObjectSchema } from './OrganizationUncheckedCreateWithoutRolesInput.schema'
import { OrganizationCreateOrConnectWithoutRolesInputObjectSchema } from './OrganizationCreateOrConnectWithoutRolesInput.schema'
import { OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutRolesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrganizationCreateWithoutRolesInputObjectSchema),
        z.lazy(() => OrganizationUncheckedCreateWithoutRolesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => OrganizationCreateOrConnectWithoutRolesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const OrganizationCreateNestedOneWithoutRolesInputObjectSchema = Schema
