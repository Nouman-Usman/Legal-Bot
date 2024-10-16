import { z } from 'zod'
import { OrganizationRoleCreateWithoutUserInputObjectSchema } from './OrganizationRoleCreateWithoutUserInput.schema'
import { OrganizationRoleUncheckedCreateWithoutUserInputObjectSchema } from './OrganizationRoleUncheckedCreateWithoutUserInput.schema'
import { OrganizationRoleCreateOrConnectWithoutUserInputObjectSchema } from './OrganizationRoleCreateOrConnectWithoutUserInput.schema'
import { OrganizationRoleUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './OrganizationRoleUpsertWithWhereUniqueWithoutUserInput.schema'
import { OrganizationRoleCreateManyUserInputEnvelopeObjectSchema } from './OrganizationRoleCreateManyUserInputEnvelope.schema'
import { OrganizationRoleWhereUniqueInputObjectSchema } from './OrganizationRoleWhereUniqueInput.schema'
import { OrganizationRoleUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './OrganizationRoleUpdateWithWhereUniqueWithoutUserInput.schema'
import { OrganizationRoleUpdateManyWithWhereWithoutUserInputObjectSchema } from './OrganizationRoleUpdateManyWithWhereWithoutUserInput.schema'
import { OrganizationRoleScalarWhereInputObjectSchema } from './OrganizationRoleScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleUpdateManyWithoutUserNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              OrganizationRoleUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OrganizationRoleUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => OrganizationRoleCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema),
          z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema),
          z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema),
          z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema),
          z.lazy(() => OrganizationRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              OrganizationRoleUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OrganizationRoleUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              OrganizationRoleUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                OrganizationRoleUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => OrganizationRoleScalarWhereInputObjectSchema),
          z.lazy(() => OrganizationRoleScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const OrganizationRoleUpdateManyWithoutUserNestedInputObjectSchema =
  Schema
