import { z } from 'zod'
import { MessageCreateWithoutSenderInputObjectSchema } from './MessageCreateWithoutSenderInput.schema'
import { MessageUncheckedCreateWithoutSenderInputObjectSchema } from './MessageUncheckedCreateWithoutSenderInput.schema'
import { MessageCreateOrConnectWithoutSenderInputObjectSchema } from './MessageCreateOrConnectWithoutSenderInput.schema'
import { MessageCreateManySenderInputEnvelopeObjectSchema } from './MessageCreateManySenderInputEnvelope.schema'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageCreateNestedManyWithoutSenderInput> = z
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
    createMany: z
      .lazy(() => MessageCreateManySenderInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const MessageCreateNestedManyWithoutSenderInputObjectSchema = Schema
