import { z } from 'zod'
import { OrganizationUpdateWithoutRolesInputObjectSchema } from './OrganizationUpdateWithoutRolesInput.schema'
import { OrganizationUncheckedUpdateWithoutRolesInputObjectSchema } from './OrganizationUncheckedUpdateWithoutRolesInput.schema'
import { OrganizationCreateWithoutRolesInputObjectSchema } from './OrganizationCreateWithoutRolesInput.schema'
import { OrganizationUncheckedCreateWithoutRolesInputObjectSchema } from './OrganizationUncheckedCreateWithoutRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationUpsertWithoutRolesInput> = z
  .object({
    update: z.union([
      z.lazy(() => OrganizationUpdateWithoutRolesInputObjectSchema),
      z.lazy(() => OrganizationUncheckedUpdateWithoutRolesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OrganizationCreateWithoutRolesInputObjectSchema),
      z.lazy(() => OrganizationUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict()

export const OrganizationUpsertWithoutRolesInputObjectSchema = Schema
