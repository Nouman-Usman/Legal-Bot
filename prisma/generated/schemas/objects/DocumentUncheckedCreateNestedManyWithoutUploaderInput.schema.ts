import { z } from 'zod'
import { DocumentCreateWithoutUploaderInputObjectSchema } from './DocumentCreateWithoutUploaderInput.schema'
import { DocumentUncheckedCreateWithoutUploaderInputObjectSchema } from './DocumentUncheckedCreateWithoutUploaderInput.schema'
import { DocumentCreateOrConnectWithoutUploaderInputObjectSchema } from './DocumentCreateOrConnectWithoutUploaderInput.schema'
import { DocumentCreateManyUploaderInputEnvelopeObjectSchema } from './DocumentCreateManyUploaderInputEnvelope.schema'
import { DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentUncheckedCreateNestedManyWithoutUploaderInput> =
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
      createMany: z
        .lazy(() => DocumentCreateManyUploaderInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DocumentWhereUniqueInputObjectSchema),
          z.lazy(() => DocumentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const DocumentUncheckedCreateNestedManyWithoutUploaderInputObjectSchema =
  Schema
