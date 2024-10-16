import { z } from 'zod'
import { MessageCreateWithoutSenderInputObjectSchema } from './MessageCreateWithoutSenderInput.schema'
import { MessageUncheckedCreateWithoutSenderInputObjectSchema } from './MessageUncheckedCreateWithoutSenderInput.schema'
import { MessageCreateOrConnectWithoutSenderInputObjectSchema } from './MessageCreateOrConnectWithoutSenderInput.schema'
import { MessageUpsertWithWhereUniqueWithoutSenderInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutSenderInput.schema'
import { MessageCreateManySenderInputEnvelopeObjectSchema } from './MessageCreateManySenderInputEnvelope.schema'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'
import { MessageUpdateWithWhereUniqueWithoutSenderInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutSenderInput.schema'
import { MessageUpdateManyWithWhereWithoutSenderInputObjectSchema } from './MessageUpdateManyWithWhereWithoutSenderInput.schema'
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUpdateManyWithoutSenderNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MessageCreateWithoutSenderInputObjectSchema),
        z.lazy(() => MessageCreateWithoutSenderInputObjectSchema).array(),
        z.lazy(() => MessageUncheckedCreateWithoutSenderInputObjectSchema),
        z
          .lazy(() => MessageUncheckedCreateWithoutSenderInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MessageCreateOrConnectWithoutSenderInputObjectSchema),
        z
          .lazy(() => MessageCreateOrConnectWithoutSenderInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => MessageUpsertWithWhereUniqueWithoutSenderInputObjectSchema,
        ),
        z
          .lazy(
            () => MessageUpsertWithWhereUniqueWithoutSenderInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MessageCreateManySenderInputEnvelopeObjectSchema)
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
          () => MessageUpdateWithWhereUniqueWithoutSenderInputObjectSchema,
        ),
        z
          .lazy(
            () => MessageUpdateWithWhereUniqueWithoutSenderInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MessageUpdateManyWithWhereWithoutSenderInputObjectSchema),
        z
          .lazy(() => MessageUpdateManyWithWhereWithoutSenderInputObjectSchema)
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

export const MessageUpdateManyWithoutSenderNestedInputObjectSchema = Schema
