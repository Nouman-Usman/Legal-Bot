import { z } from 'zod'
import { MessageCreateWithoutCaseInputObjectSchema } from './MessageCreateWithoutCaseInput.schema'
import { MessageUncheckedCreateWithoutCaseInputObjectSchema } from './MessageUncheckedCreateWithoutCaseInput.schema'
import { MessageCreateOrConnectWithoutCaseInputObjectSchema } from './MessageCreateOrConnectWithoutCaseInput.schema'
import { MessageCreateManyCaseInputEnvelopeObjectSchema } from './MessageCreateManyCaseInputEnvelope.schema'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageCreateNestedManyWithoutCaseInput> = z
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
    createMany: z
      .lazy(() => MessageCreateManyCaseInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MessageWhereUniqueInputObjectSchema),
        z.lazy(() => MessageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const MessageCreateNestedManyWithoutCaseInputObjectSchema = Schema
