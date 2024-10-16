import { z } from 'zod'
import { LawyerProfileCreateWithoutUserInputObjectSchema } from './LawyerProfileCreateWithoutUserInput.schema'
import { LawyerProfileUncheckedCreateWithoutUserInputObjectSchema } from './LawyerProfileUncheckedCreateWithoutUserInput.schema'
import { LawyerProfileCreateOrConnectWithoutUserInputObjectSchema } from './LawyerProfileCreateOrConnectWithoutUserInput.schema'
import { LawyerProfileCreateManyUserInputEnvelopeObjectSchema } from './LawyerProfileCreateManyUserInputEnvelope.schema'
import { LawyerProfileWhereUniqueInputObjectSchema } from './LawyerProfileWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileUncheckedCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(() => LawyerProfileCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema),
          z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const LawyerProfileUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema
