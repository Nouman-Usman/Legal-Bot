import { z } from 'zod'
import { CaseCreateWithoutLawyerProfileInputObjectSchema } from './CaseCreateWithoutLawyerProfileInput.schema'
import { CaseUncheckedCreateWithoutLawyerProfileInputObjectSchema } from './CaseUncheckedCreateWithoutLawyerProfileInput.schema'
import { CaseCreateOrConnectWithoutLawyerProfileInputObjectSchema } from './CaseCreateOrConnectWithoutLawyerProfileInput.schema'
import { CaseUpsertWithWhereUniqueWithoutLawyerProfileInputObjectSchema } from './CaseUpsertWithWhereUniqueWithoutLawyerProfileInput.schema'
import { CaseCreateManyLawyerProfileInputEnvelopeObjectSchema } from './CaseCreateManyLawyerProfileInputEnvelope.schema'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseUpdateWithWhereUniqueWithoutLawyerProfileInputObjectSchema } from './CaseUpdateWithWhereUniqueWithoutLawyerProfileInput.schema'
import { CaseUpdateManyWithWhereWithoutLawyerProfileInputObjectSchema } from './CaseUpdateManyWithWhereWithoutLawyerProfileInput.schema'
import { CaseScalarWhereInputObjectSchema } from './CaseScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpdateManyWithoutLawyerProfileNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CaseCreateWithoutLawyerProfileInputObjectSchema),
          z.lazy(() => CaseCreateWithoutLawyerProfileInputObjectSchema).array(),
          z.lazy(
            () => CaseUncheckedCreateWithoutLawyerProfileInputObjectSchema,
          ),
          z
            .lazy(
              () => CaseUncheckedCreateWithoutLawyerProfileInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => CaseCreateOrConnectWithoutLawyerProfileInputObjectSchema,
          ),
          z
            .lazy(
              () => CaseCreateOrConnectWithoutLawyerProfileInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              CaseUpsertWithWhereUniqueWithoutLawyerProfileInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CaseUpsertWithWhereUniqueWithoutLawyerProfileInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CaseCreateManyLawyerProfileInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CaseWhereUniqueInputObjectSchema),
          z.lazy(() => CaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CaseWhereUniqueInputObjectSchema),
          z.lazy(() => CaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CaseWhereUniqueInputObjectSchema),
          z.lazy(() => CaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CaseWhereUniqueInputObjectSchema),
          z.lazy(() => CaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              CaseUpdateWithWhereUniqueWithoutLawyerProfileInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CaseUpdateWithWhereUniqueWithoutLawyerProfileInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => CaseUpdateManyWithWhereWithoutLawyerProfileInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                CaseUpdateManyWithWhereWithoutLawyerProfileInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CaseScalarWhereInputObjectSchema),
          z.lazy(() => CaseScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const CaseUpdateManyWithoutLawyerProfileNestedInputObjectSchema = Schema
