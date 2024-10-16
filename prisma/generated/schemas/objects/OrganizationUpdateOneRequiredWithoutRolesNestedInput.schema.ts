import { z } from 'zod'
import { OrganizationCreateWithoutRolesInputObjectSchema } from './OrganizationCreateWithoutRolesInput.schema'
import { OrganizationUncheckedCreateWithoutRolesInputObjectSchema } from './OrganizationUncheckedCreateWithoutRolesInput.schema'
import { OrganizationCreateOrConnectWithoutRolesInputObjectSchema } from './OrganizationCreateOrConnectWithoutRolesInput.schema'
import { OrganizationUpsertWithoutRolesInputObjectSchema } from './OrganizationUpsertWithoutRolesInput.schema'
import { OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'
import { OrganizationUpdateWithoutRolesInputObjectSchema } from './OrganizationUpdateWithoutRolesInput.schema'
import { OrganizationUncheckedUpdateWithoutRolesInputObjectSchema } from './OrganizationUncheckedUpdateWithoutRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutRolesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => OrganizationCreateWithoutRolesInputObjectSchema),
          z.lazy(
            () => OrganizationUncheckedCreateWithoutRolesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => OrganizationCreateOrConnectWithoutRolesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => OrganizationUpsertWithoutRolesInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => OrganizationWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => OrganizationUpdateWithoutRolesInputObjectSchema),
          z.lazy(
            () => OrganizationUncheckedUpdateWithoutRolesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict()

export const OrganizationUpdateOneRequiredWithoutRolesNestedInputObjectSchema =
  Schema
