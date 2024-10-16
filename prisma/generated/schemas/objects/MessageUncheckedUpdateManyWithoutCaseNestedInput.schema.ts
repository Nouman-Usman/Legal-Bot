import { z } from 'zod'
import { MessageCreateWithoutCaseInputObjectSchema } from './MessageCreateWithoutCaseInput.schema'
import { MessageUncheckedCreateWithoutCaseInputObjectSchema } from './MessageUncheckedCreateWithoutCaseInput.schema'
import { MessageCreateOrConnectWithoutCaseInputObjectSchema } from './MessageCreateOrConnectWithoutCaseInput.schema'
import { MessageUpsertWithWhereUniqueWithoutCaseInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutCaseInput.schema'
import { MessageCreateManyCaseInputEnvelopeObjectSchema } from './MessageCreateManyCaseInputEnvelope.schema'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'
import { MessageUpdateWithWhereUniqueWithoutCaseInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutCaseInput.schema'
import { MessageUpdateManyWithWhereWithoutCaseInputObjectSchema } from './MessageUpdateManyWithWhereWithoutCaseInput.schema'
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutCaseNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutCaseInputObjectSchema),
          z.lazy(() => MessageCreateWithoutCaseInputObjectSchema).array(),
          z.lazy(() => MessageUncheckedCreateWithoutCaseInputObjectSchema),
          z
            .lazy(() => MessageUncheckedCreateWithoutCaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MessageCreateOrConnectWithoutCaseInputObjectSchema),
          z
            .lazy(() => MessageCreateOrConnectWithoutCaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => MessageUpsertWithWhereUniqueWithoutCaseInputObjectSchema,
          ),
          z
            .lazy(
              () => MessageUpsertWithWhereUniqueWithoutCaseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MessageCreateManyCaseInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => MessageUpdateWithWhereUniqueWithoutCaseInputObjectSchema,
          ),
          z
            .lazy(
              () => MessageUpdateWithWhereUniqueWithoutCaseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => MessageUpdateManyWithWhereWithoutCaseInputObjectSchema),
          z
            .lazy(() => MessageUpdateManyWithWhereWithoutCaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MessageScalarWhereInputObjectSchema),
          z.lazy(() => MessageScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const MessageUncheckedUpdateManyWithoutCaseNestedInputObjectSchema =
  Schema
