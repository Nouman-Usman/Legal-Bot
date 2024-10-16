import { z } from 'zod'
import { CaseCreateWithoutLawyerProfileInputObjectSchema } from './CaseCreateWithoutLawyerProfileInput.schema'
import { CaseUncheckedCreateWithoutLawyerProfileInputObjectSchema } from './CaseUncheckedCreateWithoutLawyerProfileInput.schema'
import { CaseCreateOrConnectWithoutLawyerProfileInputObjectSchema } from './CaseCreateOrConnectWithoutLawyerProfileInput.schema'
import { CaseCreateManyLawyerProfileInputEnvelopeObjectSchema } from './CaseCreateManyLawyerProfileInputEnvelope.schema'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateNestedManyWithoutLawyerProfileInput> =
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
      createMany: z
        .lazy(() => CaseCreateManyLawyerProfileInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CaseWhereUniqueInputObjectSchema),
          z.lazy(() => CaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const CaseCreateNestedManyWithoutLawyerProfileInputObjectSchema = Schema
