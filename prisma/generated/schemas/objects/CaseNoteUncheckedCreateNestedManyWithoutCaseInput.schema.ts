import { z } from 'zod'
import { CaseNoteCreateWithoutCaseInputObjectSchema } from './CaseNoteCreateWithoutCaseInput.schema'
import { CaseNoteUncheckedCreateWithoutCaseInputObjectSchema } from './CaseNoteUncheckedCreateWithoutCaseInput.schema'
import { CaseNoteCreateOrConnectWithoutCaseInputObjectSchema } from './CaseNoteCreateOrConnectWithoutCaseInput.schema'
import { CaseNoteCreateManyCaseInputEnvelopeObjectSchema } from './CaseNoteCreateManyCaseInputEnvelope.schema'
import { CaseNoteWhereUniqueInputObjectSchema } from './CaseNoteWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteUncheckedCreateNestedManyWithoutCaseInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CaseNoteCreateWithoutCaseInputObjectSchema),
          z.lazy(() => CaseNoteCreateWithoutCaseInputObjectSchema).array(),
          z.lazy(() => CaseNoteUncheckedCreateWithoutCaseInputObjectSchema),
          z
            .lazy(() => CaseNoteUncheckedCreateWithoutCaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CaseNoteCreateOrConnectWithoutCaseInputObjectSchema),
          z
            .lazy(() => CaseNoteCreateOrConnectWithoutCaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CaseNoteCreateManyCaseInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CaseNoteWhereUniqueInputObjectSchema),
          z.lazy(() => CaseNoteWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const CaseNoteUncheckedCreateNestedManyWithoutCaseInputObjectSchema =
  Schema
