import { z } from 'zod'
import { LawyerProfileCreateWithoutUserInputObjectSchema } from './LawyerProfileCreateWithoutUserInput.schema'
import { LawyerProfileUncheckedCreateWithoutUserInputObjectSchema } from './LawyerProfileUncheckedCreateWithoutUserInput.schema'
import { LawyerProfileCreateOrConnectWithoutUserInputObjectSchema } from './LawyerProfileCreateOrConnectWithoutUserInput.schema'
import { LawyerProfileUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './LawyerProfileUpsertWithWhereUniqueWithoutUserInput.schema'
import { LawyerProfileCreateManyUserInputEnvelopeObjectSchema } from './LawyerProfileCreateManyUserInputEnvelope.schema'
import { LawyerProfileWhereUniqueInputObjectSchema } from './LawyerProfileWhereUniqueInput.schema'
import { LawyerProfileUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './LawyerProfileUpdateWithWhereUniqueWithoutUserInput.schema'
import { LawyerProfileUpdateManyWithWhereWithoutUserInputObjectSchema } from './LawyerProfileUpdateManyWithWhereWithoutUserInput.schema'
import { LawyerProfileScalarWhereInputObjectSchema } from './LawyerProfileScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LawyerProfileCreateWithoutUserInputObjectSchema),
          z.lazy(() => LawyerProfileCreateWithoutUserInputObjectSchema).array(),
          z.lazy(
            () => LawyerProfileUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => LawyerProfileUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => LawyerProfileCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => LawyerProfileCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              LawyerProfileUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LawyerProfileUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LawyerProfileCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema),
          z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema),
          z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema),
          z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema),
          z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              LawyerProfileUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LawyerProfileUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => LawyerProfileUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                LawyerProfileUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LawyerProfileScalarWhereInputObjectSchema),
          z.lazy(() => LawyerProfileScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const LawyerProfileUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema
