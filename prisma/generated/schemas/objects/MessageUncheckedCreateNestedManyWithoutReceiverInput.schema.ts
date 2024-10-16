import { z } from 'zod'
import { MessageCreateWithoutReceiverInputObjectSchema } from './MessageCreateWithoutReceiverInput.schema'
import { MessageUncheckedCreateWithoutReceiverInputObjectSchema } from './MessageUncheckedCreateWithoutReceiverInput.schema'
import { MessageCreateOrConnectWithoutReceiverInputObjectSchema } from './MessageCreateOrConnectWithoutReceiverInput.schema'
import { MessageCreateManyReceiverInputEnvelopeObjectSchema } from './MessageCreateManyReceiverInputEnvelope.schema'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutReceiverInput> =
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
      createMany: z
        .lazy(() => MessageCreateManyReceiverInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MessageWhereUniqueInputObjectSchema),
          z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const MessageUncheckedCreateNestedManyWithoutReceiverInputObjectSchema =
  Schema
