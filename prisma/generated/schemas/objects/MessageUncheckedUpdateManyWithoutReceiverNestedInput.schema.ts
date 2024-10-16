import { z } from 'zod'
import { MessageCreateWithoutReceiverInputObjectSchema } from './MessageCreateWithoutReceiverInput.schema'
import { MessageUncheckedCreateWithoutReceiverInputObjectSchema } from './MessageUncheckedCreateWithoutReceiverInput.schema'
import { MessageCreateOrConnectWithoutReceiverInputObjectSchema } from './MessageCreateOrConnectWithoutReceiverInput.schema'
import { MessageUpsertWithWhereUniqueWithoutReceiverInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutReceiverInput.schema'
import { MessageCreateManyReceiverInputEnvelopeObjectSchema } from './MessageCreateManyReceiverInputEnvelope.schema'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'
import { MessageUpdateWithWhereUniqueWithoutReceiverInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutReceiverInput.schema'
import { MessageUpdateManyWithWhereWithoutReceiverInputObjectSchema } from './MessageUpdateManyWithWhereWithoutReceiverInput.schema'
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutReceiverNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MessageCreateWithoutReceiverInputObjectSchema),
          z.lazy(() => MessageCreateWithoutReceiverInputObjectSchema).array(),
          z.lazy(() => MessageUncheckedCreateWithoutReceiverInputObjectSchema),
          z
            .lazy(() => MessageUncheckedCreateWithoutReceiverInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MessageCreateOrConnectWithoutReceiverInputObjectSchema),
          z
            .lazy(() => MessageCreateOrConnectWithoutReceiverInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => MessageUpsertWithWhereUniqueWithoutReceiverInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpsertWithWhereUniqueWithoutReceiverInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MessageCreateManyReceiverInputEnvelopeObjectSchema)
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
            () => MessageUpdateWithWhereUniqueWithoutReceiverInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MessageUpdateWithWhereUniqueWithoutReceiverInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MessageUpdateManyWithWhereWithoutReceiverInputObjectSchema,
          ),
          z
            .lazy(
              () => MessageUpdateManyWithWhereWithoutReceiverInputObjectSchema,
            )
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

export const MessageUncheckedUpdateManyWithoutReceiverNestedInputObjectSchema =
  Schema
