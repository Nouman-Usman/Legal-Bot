import { z } from 'zod'
import { OrganizationRoleCreateWithoutUserInputObjectSchema } from './OrganizationRoleCreateWithoutUserInput.schema'
import { OrganizationRoleUncheckedCreateWithoutUserInputObjectSchema } from './OrganizationRoleUncheckedCreateWithoutUserInput.schema'
import { OrganizationRoleCreateOrConnectWithoutUserInputObjectSchema } from './OrganizationRoleCreateOrConnectWithoutUserInput.schema'
import { OrganizationRoleCreateManyUserInputEnvelopeObjectSchema } from './OrganizationRoleCreateManyUserInputEnvelope.schema'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './OrganizationRoleWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => OrganizationRoleCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => OrganizationRoleCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => OrganizationRoleUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => OrganizationRoleUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => OrganizationRoleCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => OrganizationRoleCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => OrganizationRoleCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema),
          z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const OrganizationRoleUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema
