import { z } from 'zod'
import { CaseCreateWithoutClientInputObjectSchema } from './CaseCreateWithoutClientInput.schema'
import { CaseUncheckedCreateWithoutClientInputObjectSchema } from './CaseUncheckedCreateWithoutClientInput.schema'
import { CaseCreateOrConnectWithoutClientInputObjectSchema } from './CaseCreateOrConnectWithoutClientInput.schema'
import { CaseCreateManyClientInputEnvelopeObjectSchema } from './CaseCreateManyClientInputEnvelope.schema'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUncheckedCreateNestedManyWithoutClientInput> =
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
      createMany: z
        .lazy(() => CaseCreateManyClientInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CaseWhereUniqueInputObjectSchema),
          z.lazy(() => CaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const CaseUncheckedCreateNestedManyWithoutClientInputObjectSchema =
  Schema
