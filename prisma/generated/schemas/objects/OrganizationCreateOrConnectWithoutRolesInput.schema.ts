import { z } from 'zod'
import { OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'
import { OrganizationCreateWithoutRolesInputObjectSchema } from './OrganizationCreateWithoutRolesInput.schema'
import { OrganizationUncheckedCreateWithoutRolesInputObjectSchema } from './OrganizationUncheckedCreateWithoutRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutRolesInput> = z
  .object({
    where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrganizationCreateWithoutRolesInputObjectSchema),
      z.lazy(() => OrganizationUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict()

export const OrganizationCreateOrConnectWithoutRolesInputObjectSchema = Schema
