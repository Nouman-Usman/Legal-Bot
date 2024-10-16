import { z } from 'zod'
import { CaseNoteCreateWithoutAuthorInputObjectSchema } from './CaseNoteCreateWithoutAuthorInput.schema'
import { CaseNoteUncheckedCreateWithoutAuthorInputObjectSchema } from './CaseNoteUncheckedCreateWithoutAuthorInput.schema'
import { CaseNoteCreateOrConnectWithoutAuthorInputObjectSchema } from './CaseNoteCreateOrConnectWithoutAuthorInput.schema'
import { CaseNoteUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './CaseNoteUpsertWithWhereUniqueWithoutAuthorInput.schema'
import { CaseNoteCreateManyAuthorInputEnvelopeObjectSchema } from './CaseNoteCreateManyAuthorInputEnvelope.schema'
import { CaseNoteWhereUniqueInputObjectSchema } from './CaseNoteWhereUniqueInput.schema'
import { CaseNoteUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './CaseNoteUpdateWithWhereUniqueWithoutAuthorInput.schema'
import { CaseNoteUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './CaseNoteUpdateManyWithWhereWithoutAuthorInput.schema'
import { CaseNoteScalarWhereInputObjectSchema } from './CaseNoteScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteUncheckedUpdateManyWithoutAuthorNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CaseNoteCreateWithoutAuthorInputObjectSchema),
          z.lazy(() => CaseNoteCreateWithoutAuthorInputObjectSchema).array(),
          z.lazy(() => CaseNoteUncheckedCreateWithoutAuthorInputObjectSchema),
          z
            .lazy(() => CaseNoteUncheckedCreateWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CaseNoteCreateOrConnectWithoutAuthorInputObjectSchema),
          z
            .lazy(() => CaseNoteCreateOrConnectWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => CaseNoteUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
          ),
          z
            .lazy(
              () => CaseNoteUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CaseNoteCreateManyAuthorInputEnvelopeObjectSchema)
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
          z.lazy(
            () => CaseNoteUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
          ),
          z
            .lazy(
              () => CaseNoteUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => CaseNoteUpdateManyWithWhereWithoutAuthorInputObjectSchema,
          ),
          z
            .lazy(
              () => CaseNoteUpdateManyWithWhereWithoutAuthorInputObjectSchema,
            )
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

export const CaseNoteUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema =
  Schema
