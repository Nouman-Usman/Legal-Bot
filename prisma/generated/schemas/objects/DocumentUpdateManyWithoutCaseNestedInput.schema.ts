import { z } from 'zod'
import { DocumentCreateWithoutCaseInputObjectSchema } from './DocumentCreateWithoutCaseInput.schema'
import { DocumentUncheckedCreateWithoutCaseInputObjectSchema } from './DocumentUncheckedCreateWithoutCaseInput.schema'
import { DocumentCreateOrConnectWithoutCaseInputObjectSchema } from './DocumentCreateOrConnectWithoutCaseInput.schema'
import { DocumentUpsertWithWhereUniqueWithoutCaseInputObjectSchema } from './DocumentUpsertWithWhereUniqueWithoutCaseInput.schema'
import { DocumentCreateManyCaseInputEnvelopeObjectSchema } from './DocumentCreateManyCaseInputEnvelope.schema'
import { DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema'
import { DocumentUpdateWithWhereUniqueWithoutCaseInputObjectSchema } from './DocumentUpdateWithWhereUniqueWithoutCaseInput.schema'
import { DocumentUpdateManyWithWhereWithoutCaseInputObjectSchema } from './DocumentUpdateManyWithWhereWithoutCaseInput.schema'
import { DocumentScalarWhereInputObjectSchema } from './DocumentScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentUpdateManyWithoutCaseNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => DocumentUpsertWithWhereUniqueWithoutCaseInputObjectSchema),
        z
          .lazy(() => DocumentUpsertWithWhereUniqueWithoutCaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => DocumentCreateManyCaseInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => DocumentWhereUniqueInputObjectSchema),
        z.lazy(() => DocumentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => DocumentWhereUniqueInputObjectSchema),
        z.lazy(() => DocumentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => DocumentWhereUniqueInputObjectSchema),
        z.lazy(() => DocumentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => DocumentWhereUniqueInputObjectSchema),
        z.lazy(() => DocumentWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => DocumentUpdateWithWhereUniqueWithoutCaseInputObjectSchema),
        z
          .lazy(() => DocumentUpdateWithWhereUniqueWithoutCaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => DocumentUpdateManyWithWhereWithoutCaseInputObjectSchema),
        z
          .lazy(() => DocumentUpdateManyWithWhereWithoutCaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => DocumentScalarWhereInputObjectSchema),
        z.lazy(() => DocumentScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const DocumentUpdateManyWithoutCaseNestedInputObjectSchema = Schema
