import { z } from 'zod'
import { DocumentCreateWithoutUploaderInputObjectSchema } from './DocumentCreateWithoutUploaderInput.schema'
import { DocumentUncheckedCreateWithoutUploaderInputObjectSchema } from './DocumentUncheckedCreateWithoutUploaderInput.schema'
import { DocumentCreateOrConnectWithoutUploaderInputObjectSchema } from './DocumentCreateOrConnectWithoutUploaderInput.schema'
import { DocumentUpsertWithWhereUniqueWithoutUploaderInputObjectSchema } from './DocumentUpsertWithWhereUniqueWithoutUploaderInput.schema'
import { DocumentCreateManyUploaderInputEnvelopeObjectSchema } from './DocumentCreateManyUploaderInputEnvelope.schema'
import { DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema'
import { DocumentUpdateWithWhereUniqueWithoutUploaderInputObjectSchema } from './DocumentUpdateWithWhereUniqueWithoutUploaderInput.schema'
import { DocumentUpdateManyWithWhereWithoutUploaderInputObjectSchema } from './DocumentUpdateManyWithWhereWithoutUploaderInput.schema'
import { DocumentScalarWhereInputObjectSchema } from './DocumentScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentUncheckedUpdateManyWithoutUploaderNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DocumentCreateWithoutUploaderInputObjectSchema),
          z.lazy(() => DocumentCreateWithoutUploaderInputObjectSchema).array(),
          z.lazy(() => DocumentUncheckedCreateWithoutUploaderInputObjectSchema),
          z
            .lazy(() => DocumentUncheckedCreateWithoutUploaderInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DocumentCreateOrConnectWithoutUploaderInputObjectSchema),
          z
            .lazy(() => DocumentCreateOrConnectWithoutUploaderInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => DocumentUpsertWithWhereUniqueWithoutUploaderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentUpsertWithWhereUniqueWithoutUploaderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DocumentCreateManyUploaderInputEnvelopeObjectSchema)
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
          z.lazy(
            () => DocumentUpdateWithWhereUniqueWithoutUploaderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentUpdateWithWhereUniqueWithoutUploaderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => DocumentUpdateManyWithWhereWithoutUploaderInputObjectSchema,
          ),
          z
            .lazy(
              () => DocumentUpdateManyWithWhereWithoutUploaderInputObjectSchema,
            )
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

export const DocumentUncheckedUpdateManyWithoutUploaderNestedInputObjectSchema =
  Schema
