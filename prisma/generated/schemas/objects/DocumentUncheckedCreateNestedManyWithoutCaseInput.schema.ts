import { z } from 'zod'
import { DocumentCreateWithoutCaseInputObjectSchema } from './DocumentCreateWithoutCaseInput.schema'
import { DocumentUncheckedCreateWithoutCaseInputObjectSchema } from './DocumentUncheckedCreateWithoutCaseInput.schema'
import { DocumentCreateOrConnectWithoutCaseInputObjectSchema } from './DocumentCreateOrConnectWithoutCaseInput.schema'
import { DocumentCreateManyCaseInputEnvelopeObjectSchema } from './DocumentCreateManyCaseInputEnvelope.schema'
import { DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentUncheckedCreateNestedManyWithoutCaseInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DocumentCreateWithoutCaseInputObjectSchema),
          z.lazy(() => DocumentCreateWithoutCaseInputObjectSchema).array(),
          z.lazy(() => DocumentUncheckedCreateWithoutCaseInputObjectSchema),
          z
            .lazy(() => DocumentUncheckedCreateWithoutCaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DocumentCreateOrConnectWithoutCaseInputObjectSchema),
          z
            .lazy(() => DocumentCreateOrConnectWithoutCaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DocumentCreateManyCaseInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DocumentWhereUniqueInputObjectSchema),
          z.lazy(() => DocumentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const DocumentUncheckedCreateNestedManyWithoutCaseInputObjectSchema =
  Schema
