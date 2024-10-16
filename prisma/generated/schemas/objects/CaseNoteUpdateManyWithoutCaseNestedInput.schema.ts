import { z } from 'zod'
import { CaseNoteCreateWithoutCaseInputObjectSchema } from './CaseNoteCreateWithoutCaseInput.schema'
import { CaseNoteUncheckedCreateWithoutCaseInputObjectSchema } from './CaseNoteUncheckedCreateWithoutCaseInput.schema'
import { CaseNoteCreateOrConnectWithoutCaseInputObjectSchema } from './CaseNoteCreateOrConnectWithoutCaseInput.schema'
import { CaseNoteUpsertWithWhereUniqueWithoutCaseInputObjectSchema } from './CaseNoteUpsertWithWhereUniqueWithoutCaseInput.schema'
import { CaseNoteCreateManyCaseInputEnvelopeObjectSchema } from './CaseNoteCreateManyCaseInputEnvelope.schema'
import { CaseNoteWhereUniqueInputObjectSchema } from './CaseNoteWhereUniqueInput.schema'
import { CaseNoteUpdateWithWhereUniqueWithoutCaseInputObjectSchema } from './CaseNoteUpdateWithWhereUniqueWithoutCaseInput.schema'
import { CaseNoteUpdateManyWithWhereWithoutCaseInputObjectSchema } from './CaseNoteUpdateManyWithWhereWithoutCaseInput.schema'
import { CaseNoteScalarWhereInputObjectSchema } from './CaseNoteScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteUpdateManyWithoutCaseNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => CaseNoteUpsertWithWhereUniqueWithoutCaseInputObjectSchema),
        z
          .lazy(() => CaseNoteUpsertWithWhereUniqueWithoutCaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => CaseNoteCreateManyCaseInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => CaseNoteWhereUniqueInputObjectSchema),
        z.lazy(() => CaseNoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => CaseNoteWhereUniqueInputObjectSchema),
        z.lazy(() => CaseNoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => CaseNoteWhereUniqueInputObjectSchema),
        z.lazy(() => CaseNoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => CaseNoteWhereUniqueInputObjectSchema),
        z.lazy(() => CaseNoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => CaseNoteUpdateWithWhereUniqueWithoutCaseInputObjectSchema),
        z
          .lazy(() => CaseNoteUpdateWithWhereUniqueWithoutCaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => CaseNoteUpdateManyWithWhereWithoutCaseInputObjectSchema),
        z
          .lazy(() => CaseNoteUpdateManyWithWhereWithoutCaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => CaseNoteScalarWhereInputObjectSchema),
        z.lazy(() => CaseNoteScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const CaseNoteUpdateManyWithoutCaseNestedInputObjectSchema = Schema
