import { z } from 'zod'
import { OrganizationRoleCreateWithoutOrganizationInputObjectSchema } from './OrganizationRoleCreateWithoutOrganizationInput.schema'
import { OrganizationRoleUncheckedCreateWithoutOrganizationInputObjectSchema } from './OrganizationRoleUncheckedCreateWithoutOrganizationInput.schema'
import { OrganizationRoleCreateOrConnectWithoutOrganizationInputObjectSchema } from './OrganizationRoleCreateOrConnectWithoutOrganizationInput.schema'
import { OrganizationRoleCreateManyOrganizationInputEnvelopeObjectSchema } from './OrganizationRoleCreateManyOrganizationInputEnvelope.schema'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './OrganizationRoleWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleCreateNestedManyWithoutOrganizationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => OrganizationRoleCreateWithoutOrganizationInputObjectSchema,
          ),
          z
            .lazy(
              () => OrganizationRoleCreateWithoutOrganizationInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              OrganizationRoleUncheckedCreateWithoutOrganizationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OrganizationRoleUncheckedCreateWithoutOrganizationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              OrganizationRoleCreateOrConnectWithoutOrganizationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OrganizationRoleCreateOrConnectWithoutOrganizationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => OrganizationRoleCreateManyOrganizationInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema),
          z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const OrganizationRoleCreateNestedManyWithoutOrganizationInputObjectSchema =
  Schema
