import { z } from 'zod'
import { CaseCreateWithoutClientInputObjectSchema } from './CaseCreateWithoutClientInput.schema'
import { CaseUncheckedCreateWithoutClientInputObjectSchema } from './CaseUncheckedCreateWithoutClientInput.schema'
import { CaseCreateOrConnectWithoutClientInputObjectSchema } from './CaseCreateOrConnectWithoutClientInput.schema'
import { CaseUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './CaseUpsertWithWhereUniqueWithoutClientInput.schema'
import { CaseCreateManyClientInputEnvelopeObjectSchema } from './CaseCreateManyClientInputEnvelope.schema'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './CaseUpdateWithWhereUniqueWithoutClientInput.schema'
import { CaseUpdateManyWithWhereWithoutClientInputObjectSchema } from './CaseUpdateManyWithWhereWithoutClientInput.schema'
import { CaseScalarWhereInputObjectSchema } from './CaseScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUncheckedUpdateManyWithoutClientNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CaseCreateWithoutClientInputObjectSchema),
          z.lazy(() => CaseCreateWithoutClientInputObjectSchema).array(),
          z.lazy(() => CaseUncheckedCreateWithoutClientInputObjectSchema),
          z
            .lazy(() => CaseUncheckedCreateWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CaseCreateOrConnectWithoutClientInputObjectSchema),
          z
            .lazy(() => CaseCreateOrConnectWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => CaseUpsertWithWhereUniqueWithoutClientInputObjectSchema),
          z
            .lazy(() => CaseUpsertWithWhereUniqueWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CaseCreateManyClientInputEnvelopeObjectSchema)
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
          z.lazy(() => CaseUpdateWithWhereUniqueWithoutClientInputObjectSchema),
          z
            .lazy(() => CaseUpdateWithWhereUniqueWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CaseUpdateManyWithWhereWithoutClientInputObjectSchema),
          z
            .lazy(() => CaseUpdateManyWithWhereWithoutClientInputObjectSchema)
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

export const CaseUncheckedUpdateManyWithoutClientNestedInputObjectSchema =
  Schema
