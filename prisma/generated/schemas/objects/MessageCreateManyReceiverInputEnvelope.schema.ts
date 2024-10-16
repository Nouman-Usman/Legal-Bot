import { z } from 'zod'
import { MessageCreateManyReceiverInputObjectSchema } from './MessageCreateManyReceiverInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageCreateManyReceiverInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MessageCreateManyReceiverInputObjectSchema),
      z.lazy(() => MessageCreateManyReceiverInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const MessageCreateManyReceiverInputEnvelopeObjectSchema = Schema
